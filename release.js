const fs = require('fs-extra');
const path = require('path');
const shell = require('shelljs');

const TEMP_PATH = path.resolve(__dirname, './temp');
const BUILD_PATH = path.resolve(__dirname, './dist');

const CURRENT_COMMIT = shell.exec('git rev-parse HEAD').stdout.trim();
const REPO_URL = 'git@wawjqyh:wawjqyh/wawjqyh.github.io.git';
const DEPLOY_BRANCH = 'gh-pages';
const COMMIT_MESSAGE = `Deploy website - based on ${CURRENT_COMMIT}`;

async function runDeploy() {
  try {
    try {
      // 创建临时目录
      await fs.ensureDir(TEMP_PATH);

      // 切换到临时目录
      shell.cd(TEMP_PATH);
    } catch (err) {
      console.log('创建 temp 目录失败');
      throw err;
    }

    if (shell.exec(`git clone --depth 1 --branch ${DEPLOY_BRANCH} ${REPO_URL} "${TEMP_PATH}"`).code === 0) {
      shell.exec('git rm -rf .');
    } else {
      shell.exec('git init');
      shell.exec(`git checkout -b ${DEPLOY_BRANCH}`);
      shell.exec(`git remote add origin ${REPO_URL}`);
    }

    // 复制需要提交的文件到临时目录
    try {
      await fs.copy(BUILD_PATH, TEMP_PATH);
    } catch (err) {
      console.log('复制到 temp 失败');
      throw err;
    }

    shell.exec('git add --all');

    const commitResults = shell.exec(`git commit -m "${COMMIT_MESSAGE}"`);

    if (shell.exec(`git push --force origin ${DEPLOY_BRANCH}`).code !== 0) {
      throw new Error('git push 失败');
    } else if (commitResults.code === 0) {
      console.log('deploy 成功！');
    }

    await fs.remove(TEMP_PATH);
  } catch (err) {
    await fs.remove(TEMP_PATH);
    console.log('deploy 失败：');
    console.log(err);
  }

  shell.exit(0);
}

runDeploy();
