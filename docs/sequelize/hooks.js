(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs/sequelize/hooks"],{jq3q:function(e,o){var n='<h1 id="hooks---\u94a9\u5b50">Hooks - \u94a9\u5b50</h1> <p>Hook\uff08\u4e5f\u79f0\u4e3a\u751f\u547d\u5468\u671f\u4e8b\u4ef6\uff09\u662f\u6267\u884c sequelize \u8c03\u7528\u4e4b\u524d\u548c\u4e4b\u540e\u8c03\u7528\u7684\u51fd\u6570\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u8981\u5728\u4fdd\u5b58\u6a21\u578b\u4e4b\u524d\u59cb\u7ec8\u8bbe\u7f6e\u503c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a <code>beforeUpdate</code> hook\u3002</p> <p>\u83b7\u53d6\u5b8c\u6574\u5217\u8868, \u8bf7\u67e5\u770b <a href="https://github.com/sequelize/sequelize/blob/master/lib/hooks.js#L7">Hooks file</a>.</p> <h2 id="\u64cd\u4f5c\u6e05\u5355">\u64cd\u4f5c\u6e05\u5355</h2> <pre><code>(1)\n  beforeBulkCreate(instances, options)\n  beforeBulkDestroy(options)\n  beforeBulkUpdate(options)\n(2)\n  beforeValidate(instance, options)\n(-)\n  validate\n(3)\n  afterValidate(instance, options)\n  - or -\n  validationFailed(instance, options, error)\n(4)\n  beforeCreate(instance, options)\n  beforeDestroy(instance, options)\n  beforeUpdate(instance, options)\n  beforeSave(instance, options)\n  beforeUpsert(values, options)\n(-)\n  create\n  destroy\n  update\n(5)\n  afterCreate(instance, options)\n  afterDestroy(instance, options)\n  afterUpdate(instance, options)\n  afterSave(instance, options)\n  afterUpsert(created, options)\n(6)\n  afterBulkCreate(instances, options)\n  afterBulkDestroy(options)\n  afterBulkUpdate(options)</code></pre><h2 id="\u58f0\u660e-hook">\u58f0\u660e Hook</h2> <p>Hook \u7684\u53c2\u6570\u901a\u8fc7\u5f15\u7528\u4f20\u9012\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u66f4\u6539\u503c\uff0c\u8fd9\u5c06\u53cd\u6620\u5728insert / update\u8bed\u53e5\u4e2d\u3002 Hook \u53ef\u80fd\u5305\u542b\u5f02\u6b65\u52a8\u4f5c - \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cHook \u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a promise\u3002</p> <p>\u76ee\u524d\u6709\u4e09\u79cd\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6dfb\u52a0 hook \u7684\u65b9\u6cd5:</p> <pre><code class="language-js">// \u65b9\u6cd51 \u901a\u8fc7 .define() \u65b9\u6cd5\nconst User = sequelize.define(&#39;user&#39;, {\n  username: DataTypes.STRING,\n  mood: {\n    type: DataTypes.ENUM,\n    values: [&#39;happy&#39;, &#39;sad&#39;, &#39;neutral&#39;]\n  }\n}, {\n  hooks: {\n    beforeValidate: (user, options) =&gt; {\n      user.mood = &#39;happy&#39;;\n    },\n    afterValidate: (user, options) =&gt; {\n      user.username = &#39;Toni&#39;;\n    }\n  }\n});\n\n// \u65b9\u6cd52 \u901a\u8fc7 . hook() \u65b9\u6cd5 (\u6216\u5176\u522b\u540d .addHook() \u65b9\u6cd5)\nUser.hook(&#39;beforeValidate&#39;, (user, options) =&gt; {\n  user.mood = &#39;happy&#39;;\n});\n\nUser.addHook(&#39;afterValidate&#39;, &#39;someCustomName&#39;, (user, options) =&gt; {\n  return sequelize.Promise.reject(new Error(&quot;I&#39;m afraid I can&#39;t let you do that!&quot;));\n});\n\n// \u65b9\u6cd53 \u901a\u8fc7\u76f4\u63a5\u65b9\u6cd5\nUser.beforeCreate((user, options) =&gt; {\n  return hashPassword(user.password).then(hashedPw =&gt; {\n    user.password = hashedPw;\n  });\n});\n\nUser.afterValidate(&#39;myHookAfter&#39;, (user, options) =&gt; {\n  user.username = &#39;Toni&#39;;\n});</code></pre> <h2 id="\u79fb\u9664-hook">\u79fb\u9664 Hook</h2> <p>\u53ea\u80fd\u5220\u9664\u6709\u540d\u79f0\u53c2\u6570\u7684 hook\u3002</p> <pre><code class="language-js">const Book = sequelize.define(&#39;book&#39;, {\n  title: DataTypes.STRING\n});\n\nBook.addHook(&#39;afterCreate&#39;, &#39;notifyUsers&#39;, (book, options) =&gt; {\n  // ...\n});\n\nBook.removeHook(&#39;afterCreate&#39;, &#39;notifyUsers&#39;);</code></pre> <p>\u4f60\u53ef\u4ee5\u6709\u5f88\u591a\u540c\u540d\u7684 hook\u3002 \u8c03\u7528 <code>.removeHook()</code> \u5c06\u4f1a\u5220\u9664\u5b83\u4eec\u3002</p> <h2 id="\u5168\u5c40--\u901a\u7528-hook">\u5168\u5c40 / \u901a\u7528 Hook</h2> <p>\u5168\u5c40 hook \u662f\u6240\u6709\u6a21\u578b\u7684 hook\u3002 \u4ed6\u4eec\u53ef\u4ee5\u5b9a\u4e49\u60a8\u60f3\u8981\u7684\u6240\u6709\u6a21\u578b\u7684\u884c\u4e3a\uff0c\u5e76\u4e14\u5bf9\u63d2\u4ef6\u7279\u522b\u6709\u7528\u3002 \u5b83\u4eec\u53ef\u4ee5\u7528\u4e24\u79cd\u65b9\u5f0f\u6765\u5b9a\u4e49\uff0c\u5b83\u4eec\u7684\u8bed\u4e49\u7565\u6709\u4e0d\u540c\uff1a</p> <h3 id="sequelizeoptionsdefine-\u9ed8\u8ba4-hook">Sequelize.options.define (\u9ed8\u8ba4 hook)</h3> <pre><code class="language-js">const sequelize = new Sequelize(..., {\n    define: {\n        hooks: {\n            beforeCreate: () =&gt; {\n                // \u505a\u4e9b\u4ec0\u4e48\n            }\n        }\n    }\n});</code></pre> <p>\u8fd9\u5c06\u4e3a\u6240\u6709\u6a21\u578b\u6dfb\u52a0\u4e00\u4e2a\u9ed8\u8ba4 hook\uff0c\u5982\u679c\u6a21\u578b\u6ca1\u6709\u5b9a\u4e49\u81ea\u5df1\u7684 <code>beforeCreate</code> hook\uff0c\u90a3\u4e48\u5b83\u5c06\u8fd0\u884c\u3002</p> <pre><code class="language-js">const User = sequelize.define(&#39;user&#39;);\nconst Project = sequelize.define(&#39;project&#39;, {}, {\n    hooks: {\n        beforeCreate: () =&gt; {\n            //  \u505a\u4e9b\u5176\u5b83\u4ec0\u4e48\n        }\n    }\n});\n\nUser.create() // \u8fd0\u884c\u5168\u5c40 hook\nProject.create() // \u8fd0\u884c\u5176\u81ea\u8eab\u7684 hook (\u56e0\u4e3a\u5168\u5c40 hook \u88ab\u8986\u76d6)</code></pre> <h3 id="sequelizeaddhook-\u5e38\u9a7b-hook">Sequelize.addHook (\u5e38\u9a7b hook)</h3> <pre><code class="language-js">sequelize.addHook(&#39;beforeCreate&#39;, () =&gt; {\n    // \u505a\u4e9b\u4ec0\u4e48\n});</code></pre> <p>\u8fd9\u4e2a hook \u603b\u662f\u5728\u521b\u5efa\u4e4b\u524d\u8fd0\u884c\uff0c\u65e0\u8bba\u6a21\u578b\u662f\u5426\u6307\u5b9a\u4e86\u81ea\u5df1\u7684 <code>beforeCreate</code> hook\uff1a</p> <pre><code class="language-js">const User = sequelize.define(&#39;user&#39;);\nconst Project = sequelize.define(&#39;project&#39;, {}, {\n    hooks: {\n        beforeCreate: () =&gt; {\n            // \u505a\u4e9b\u5176\u5b83\u4ec0\u4e48\n        }\n    }\n});\n\nUser.create() // \u8fd0\u884c\u5168\u5c40 hook\nProject.create() //\u8fd0\u884c\u5176\u81ea\u5df1\u7684 hook \u4e4b\u540e\u8fd0\u884c\u5168\u5c40 hook</code></pre> <p>\u672c\u5730 hook \u603b\u662f\u5728\u5168\u5c40 hook \u4e4b\u524d\u8fd0\u884c\u3002</p> <h3 id="\u5b9e\u4f8b-hook">\u5b9e\u4f8b Hook</h3> <p>\u5f53\u60a8\u7f16\u8f91\u5355\u4e2a\u5bf9\u8c61\u65f6\uff0c\u4ee5\u4e0b hook \u5c06\u89e6\u53d1</p> <pre><code>beforeValidate\nafterValidate or validationFailed\nbeforeCreate / beforeUpdate  / beforeDestroy\nafterCreate / afterUpdate / afterDestroy</code></pre><pre><code class="language-js">// ...\u5b9a\u4e49 ...\nUser.beforeCreate(user =&gt; {\n  if (user.accessLevel &gt; 10 &amp;&amp; user.username !== &quot;Boss&quot;) {\n    throw new Error(&quot;\u60a8\u4e0d\u80fd\u6388\u4e88\u8be5\u7528\u623710\u7ea7\u4ee5\u4e0a\u7684\u8bbf\u95ee\u7ea7\u522b\uff01&quot;)\n  }\n})</code></pre> <p>\u6b64\u793a\u4f8b\u5c06\u8fd4\u56de\u9519\u8bef:</p> <pre><code class="language-js">User.create({username: &#39;Not a Boss&#39;, accessLevel: 20}).catch(err =&gt; {\n  console.log(err); // \u60a8\u4e0d\u80fd\u6388\u4e88\u8be5\u7528\u6237 10 \u7ea7\u4ee5\u4e0a\u7684\u8bbf\u95ee\u7ea7\u522b\uff01\n});</code></pre> <p>\u4ee5\u4e0b\u793a\u4f8b\u5c06\u8fd4\u56de\u6210\u529f:</p> <pre><code class="language-js">User.create({username: &#39;Boss&#39;, accessLevel: 20}).then(user =&gt; {\n  console.log(user); // \u7528\u6237\u540d\u4e3a Boss \u548c accessLevel \u4e3a 20 \u7684\u7528\u6237\u5bf9\u8c61\n});</code></pre> <h3 id="\u6a21\u578b-hook">\u6a21\u578b Hook</h3> <p>\u6709\u65f6\uff0c\u60a8\u5c06\u4e00\u6b21\u7f16\u8f91\u591a\u4e2a\u8bb0\u5f55\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u6a21\u578b\u4e0a\u7684 <code>bulkCreate, update, destroy</code> \u65b9\u6cd5\u3002 \u5f53\u60a8\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u65f6\uff0c\u5c06\u4f1a\u89e6\u53d1\u4ee5\u4e0b\u5185\u5bb9\uff1a</p> <pre><code>beforeBulkCreate(instances, options)\nbeforeBulkUpdate(options)\nbeforeBulkDestroy(options)\nafterBulkCreate(instances, options)\nafterBulkUpdate(options)\nafterBulkDestroy(options)</code></pre><p>\u5982\u679c\u8981\u4e3a\u6bcf\u4e2a\u5355\u72ec\u7684\u8bb0\u5f55\u89e6\u53d1 hook\uff0c\u8fde\u540c\u6279\u91cf hook\uff0c\u60a8\u53ef\u4ee5\u5c06 <code>personalHooks:true</code> \u4f20\u9012\u7ed9\u8c03\u7528\u3002</p> <pre><code class="language-js">Model.destroy({ where: {accessLevel: 0}, individualHooks: true});\n// \u5c06\u9009\u62e9\u8981\u5220\u9664\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5e76\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u5220\u9664\u4e4b\u524d + \u4e4b\u540e\u89e6\u53d1\n\nModel.update({username: &#39;Toni&#39;}, { where: {accessLevel: 0}, individualHooks: true});\n// \u5c06\u9009\u62e9\u8981\u66f4\u65b0\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5e76\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u66f4\u65b0\u4e4b\u524d + \u4e4b\u540e\u89e6\u53d1</code></pre> <p>Hook \u65b9\u6cd5\u7684 <code>options</code> \u53c2\u6570\u5c06\u662f\u63d0\u4f9b\u7ed9\u76f8\u5e94\u65b9\u6cd5\u6216\u5176\u514b\u9686\u548c\u6269\u5c55\u7248\u672c\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002</p> <pre><code class="language-js">Model.beforeBulkCreate((records, {fields}) =&gt; {\n  // records = \u7b2c\u4e00\u4e2a\u53c2\u6570\u53d1\u9001\u5230 .bulkCreate\n  // fields = \u7b2c\u4e8c\u4e2a\u53c2\u6570\u5b57\u6bb5\u4e4b\u4e00\u53d1\u9001\u5230 .bulkCreate\n  })\n\nModel.bulkCreate([\n    {username: &#39;Toni&#39;}, // \u90e8\u5206\u8bb0\u5f55\u53c2\u6570\n    {username: &#39;Tobi&#39;} // \u90e8\u5206\u8bb0\u5f55\u53c2\u6570\n  ], {fields: [&#39;username&#39;]} // \u9009\u9879\u53c2\u6570\n)\n\nModel.beforeBulkUpdate(({attributes, where}) =&gt; {\n  // where - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u514b\u9686\u7684\u5b57\u6bb5\u4e4b\u4e00\u53d1\u9001\u5230 .update\n  // attributes - .update \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u514b\u9686\u7684\u5b57\u6bb5\u4e4b\u4e00\u88ab\u7528\u4e8e\u6269\u5c55\n})\n\nModel.update({gender: &#39;Male&#39;} /*\u5c5e\u6027\u53c2\u6570*/, { where: {username: &#39;Tom&#39;}} /*where \u53c2\u6570*/)\n\nModel.beforeBulkDestroy(({where, individualHooks}) =&gt; {\n  // individualHooks - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u88ab\u6269\u5c55\u7684\u514b\u9686\u88ab\u8986\u76d6\u7684\u9ed8\u8ba4\u503c\u53d1\u9001\u5230 Model.destroy\n  // where - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u514b\u9686\u7684\u5b57\u6bb5\u4e4b\u4e00\u53d1\u9001\u5230 Model.destroy\n})\n\nModel.destroy({ where: {username: &#39;Tom&#39;}} /*where \u53c2\u6570*/)</code></pre> <p>\u5982\u679c\u7528 <code>updates.OnDuplicate</code> \u53c2\u6570\u4f7f\u7528 <code>Model.bulkCreate(...)</code> \uff0c\u90a3\u4e48 hook \u4e2d\u5bf9 <code>updatesOnDuplicate</code> \u6570\u7ec4\u4e2d\u6ca1\u6709\u7ed9\u51fa\u7684\u5b57\u6bb5\u6240\u505a\u7684\u66f4\u6539\u5c06\u4e0d\u4f1a\u88ab\u6301\u4e45\u4fdd\u7559\u5230\u6570\u636e\u5e93\u3002 \u4f46\u662f\uff0c\u5982\u679c\u8fd9\u662f\u60a8\u60f3\u8981\u7684\uff0c\u5219\u53ef\u4ee5\u66f4\u6539 hook \u4e2d\u7684 updatesOnDuplicate \u9009\u9879\u3002</p> <pre><code class="language-js">// \u4f7f\u7528 updatesOnDuplicate \u9009\u9879\u6279\u91cf\u66f4\u65b0\u73b0\u6709\u7528\u6237\nUsers.bulkCreate([\n  { id: 1, isMember: true },\n  { id: 2, isMember: false }\n], {\n  updatesOnDuplicate: [&#39;isMember&#39;]\n});\n\nUser.beforeBulkCreate((users, options) =&gt; {\n  for (const user of users) {\n    if (user.isMember) {\n      user.memberSince = new Date();\n    }\n  }\n\n  // \u6dfb\u52a0 memberSince \u5230 updatesOnDuplicate \u5426\u5219 memberSince \u671f\u5c06\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u5230\u6570\u636e\u5e93\n  options.updatesOnDuplicate.push(&#39;memberSince&#39;);\n});</code></pre> <h2 id="\u5173\u8054">\u5173\u8054</h2> <p>\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0chook \u5bf9\u4e8e\u76f8\u5173\u8054\u7684\u5b9e\u4f8b\u800c\u8a00\u5c06\u662f\u4e00\u6837\u7684\uff0c\u9664\u4e86\u51e0\u4ef6\u4e8b\u60c5\u4e4b\u5916\u3002</p> <ol> <li>\u5f53\u4f7f\u7528 add/set \u51fd\u6570\u65f6\uff0c\u5c06\u8fd0\u884c beforeUpdate/afterUpdate hook\u3002</li> <li>\u8c03\u7528 beforeDestroy/afterDestroy hook \u7684\u552f\u4e00\u65b9\u6cd5\u662f\u4e0e <code>onDelete:&#39;cascade</code> \u548c\u53c2\u6570 <code>hooks\uff1atrue</code> \u76f8\u5173\u8054\u3002 \u4f8b\u5982\uff1a</li> </ol> <pre><code class="language-js">const Projects = sequelize.define(&#39;projects&#39;, {\n  title: DataTypes.STRING\n});\n\nconst Tasks = sequelize.define(&#39;tasks&#39;, {\n  title: DataTypes.STRING\n});\n\nProjects.hasMany(Tasks, { onDelete: &#39;cascade&#39;, hooks: true });\nTasks.belongsTo(Projects);</code></pre> <p>\u8be5\u4ee3\u7801\u5c06\u5728Tasks\u8868\u4e0a\u8fd0\u884cbeforeDestroy / afterDestroy\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSequelize\u4f1a\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u4f18\u5316\u60a8\u7684\u67e5\u8be2\u3002 \u5728\u5220\u9664\u65f6\u8c03\u7528\u7ea7\u8054\uff0cSequelize\u5c06\u7b80\u5355\u5730\u6267\u884c\u4e00\u4e2a</p> <pre><code class="language-sql">DELETE FROM `table` WHERE associatedIdentifier = associatedIdentifier.primaryKey</code></pre> <p>\u7136\u800c\uff0c\u6dfb\u52a0 <code>hooks: true</code> \u4f1a\u660e\u786e\u544a\u8bc9 Sequelize\uff0c\u4f18\u5316\u4e0d\u662f\u4f60\u6240\u5173\u5fc3\u7684\uff0c\u5e76\u4e14\u4f1a\u5728\u5173\u8054\u7684\u5bf9\u8c61\u4e0a\u6267\u884c\u4e00\u4e2a <code>SELECT</code>\uff0c\u5e76\u9010\u4e2a\u5220\u9664\u6bcf\u4e2a\u5b9e\u4f8b\uff0c\u4ee5\u4fbf\u80fd\u591f\u4f7f\u7528\u6b63\u786e\u7684\u53c2\u6570\u8c03\u7528 hook\u3002</p> <p>\u5982\u679c\u60a8\u7684\u5173\u8054\u7c7b\u578b\u4e3a <code>n:m</code>\uff0c\u5219\u5728\u4f7f\u7528 <code>remove</code> \u8c03\u7528\u65f6\uff0c\u60a8\u53ef\u80fd\u6709\u5174\u8da3\u5728\u76f4\u901a\u6a21\u578b\u4e0a\u89e6\u53d1 hook\u3002 \u5728\u5185\u90e8\uff0csequelize \u4f7f\u7528 <code>Model.destroy</code>\uff0c\u81f4\u4f7f\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u8c03\u7528 <code>bulkDestroy</code> \u800c\u4e0d\u662f <code>before / afterDestroy</code> hook\u3002</p> <p>\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06 <code>{individualHooks:true}</code> \u4f20\u9012\u7ed9 <code>remove</code> \u8c03\u7528\u6765\u7b80\u5355\u5730\u89e3\u51b3\uff0c\u4ece\u800c\u5bfc\u81f4\u6bcf\u4e2a hook \u90fd\u901a\u8fc7\u5b9e\u4f8b\u5bf9\u8c61\u88ab\u5220\u9664\u3002</p> <h2 id="\u5173\u4e8e\u4e8b\u52a1\u7684\u6ce8\u610f\u4e8b\u9879">\u5173\u4e8e\u4e8b\u52a1\u7684\u6ce8\u610f\u4e8b\u9879</h2> <p>\u8bf7\u6ce8\u610f\uff0cSequelize \u4e2d\u7684\u8bb8\u591a\u6a21\u578b\u64cd\u4f5c\u5141\u8bb8\u60a8\u5728\u65b9\u6cd5\u7684 options \u53c2\u6570\u4e2d\u6307\u5b9a\u4e8b\u52a1\u3002 \u5982\u679c\u5728\u539f\u59cb\u8c03\u7528\u4e2d <em>\u6307\u5b9a</em> \u4e86\u4e00\u4e2a\u4e8b\u52a1\uff0c\u5b83\u5c06\u51fa\u73b0\u5728\u4f20\u9012\u7ed9 hook \u51fd\u6570\u7684 options \u53c2\u6570\u4e2d\u3002 \u4f8b\u5982\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u6bb5\uff1a</p> <pre><code class="language-js">// \u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u5f02\u6b65 hook \u7684 promise \u98ce\u683c\uff0c\u800c\u4e0d\u662f\u56de\u8c03\u3002\nUser.hook(&#39;afterCreate&#39;, (user, options) =&gt; {\n  // &#39;transaction&#39; \u5c06\u5728 options.transaction \u4e2d\u53ef\u7528\n\n  // \u6b64\u64cd\u4f5c\u5c06\u6210\u4e3a\u4e0e\u539f\u59cb User.create \u8c03\u7528\u76f8\u540c\u7684\u4e8b\u52a1\u7684\u4e00\u90e8\u5206\u3002\n  return User.update({\n    mood: &#39;sad&#39;\n  }, {\n    where: {\n      id: user.id\n    },\n    transaction: options.transaction\n  });\n});\n\n\nsequelize.transaction(transaction =&gt; {\n  User.create({\n    username: &#39;someguy&#39;,\n    mood: &#39;happy&#39;,\n    transaction\n  });\n});</code></pre> <p>\u5982\u679c\u6211\u4eec\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684 <code>User.update</code> \u8c03\u7528\u4e2d\u672a\u5305\u542b\u4e8b\u52a1\u9009\u9879\uff0c\u5219\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55\u66f4\u6539\uff0c\u56e0\u4e3a\u5728\u5df2\u63d0\u4ea4\u6302\u8d77\u7684\u4e8b\u52a1\u4e4b\u524d\uff0c\u6211\u4eec\u65b0\u521b\u5efa\u7684\u7528\u6237\u4e0d\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\u3002</p> <h3 id="\u5185\u90e8\u4e8b\u52a1">\u5185\u90e8\u4e8b\u52a1</h3> <p>\u8981\u8ba4\u8bc6\u5230 sequelize \u53ef\u80fd\u4f1a\u5728\u67d0\u4e9b\u64cd\u4f5c\uff08\u5982 <code>Model.findOrCreate</code>\uff09\u5185\u90e8\u4f7f\u7528\u4e8b\u52a1\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002 \u5982\u679c\u4f60\u7684 hook \u51fd\u6570\u6267\u884c\u4f9d\u8d56\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u7684\u8bfb\u53d6\u6216\u5199\u5165\u64cd\u4f5c\uff0c\u6216\u8005\u4fee\u6539\u5bf9\u8c61\u7684\u5b58\u50a8\u503c\uff0c\u5c31\u50cf\u4e0a\u4e00\u8282\u4e2d\u7684\u4f8b\u5b50\u4e00\u6837\uff0c\u4f60\u5e94\u8be5\u603b\u662f\u6307\u5b9a <code>{ transaction: options.transaction }</code>\u3002</p> <p>\u5982\u679c\u5728\u5904\u7406\u64cd\u4f5c\u7684\u8fc7\u7a0b\u4e2d\u5df2\u7ecf\u8c03\u7528\u4e86\u8be5 hook \uff0c\u5219\u8fd9\u5c06\u786e\u4fdd\u60a8\u7684\u4f9d\u8d56\u8bfb/\u5199\u662f\u540c\u4e00\u4e8b\u52a1\u7684\u4e00\u90e8\u5206\u3002 \u5982\u679c hook \u6ca1\u6709\u88ab\u5904\u7406\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a<code>{ transaction: null }</code> \u5e76\u4e14\u53ef\u4ee5\u9884\u671f\u9ed8\u8ba4\u884c\u4e3a\u3002</p> ';e.exports=n}}]);