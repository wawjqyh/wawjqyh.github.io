import React from 'react';
import ReactDOM from 'react-dom';
import iconLoading from '../assets/loading.svg';

const loadingWrapper = document.createElement('div');
loadingWrapper.className = 'loadingWrapper';
document.body.appendChild(loadingWrapper);

const errMsg = (err: any) => {
  const errText = err && err.msg ? err.msg : '网络连接超时，请稍后重试';
  alert(errText);
};

const showLoading = (content: any) => {
  loadingWrapper.style.display = 'block';
  ReactDOM.render(
    <div className="fullLoading">
      <img className="iconLoading" src={iconLoading} alt="" />
      {content && <div className="fullLoadingCon">{content}</div>}
    </div>,
    loadingWrapper
  );
};

const hideLoading = () => {
  loadingWrapper.style.display = 'none';
};

function getUrlString(key: string) {
  let urlSearch = window.location.href.split('?').pop() || '';
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  let str = urlSearch.match(reg);

  if (str) {
    return str[2];
  } else {
    return null;
  }
}

export { errMsg, showLoading, hideLoading, getUrlString };
