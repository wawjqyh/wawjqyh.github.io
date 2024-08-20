export default [
  '计算机网络',
  ['网络分层模型', 'networkModel', () => import(/* webpackChunkName: "docs/network/networkModel" */ './docs/1-network-model.md')],
  ['IP地址', 'IP', () => import(/* webpackChunkName: "docs/network/IP" */ './docs/3-IP.md')],
  ['子网掩码', 'subnet', () => import(/* webpackChunkName: "docs/network/subnet" */ './docs/4-subnet.md')],
  ['端口', 'port', () => import(/* webpackChunkName: "docs/network/port" */ './docs/5-port.md')],
  ['DNS', 'DNS', () => import(/* webpackChunkName: "docs/network/DNS" */ './docs/6-DNS.md')],
  ['网关', 'gateway', () => import(/* webpackChunkName: "docs/network/gateway" */ './docs/7-gateway.md')],

  'http',
  ['http 的历史', 'httpHistory', () => import(/* webpackChunkName: "docs/network/httpHistory" */ './docs/8-http-history.md')],
  ['http 的概念', 'httpConcept', () => import(/* webpackChunkName: "docs/network/httpConcept" */ './docs/9-http-concept.md')],
  ['与 http 相关的概念和协议', 'httpOthers', () => import(/* webpackChunkName: "docs/network/httpOthers" */ './docs/10-http-others.md')],
  ['资源访问过程', 'accessProcedure', () => import(/* webpackChunkName: "docs/network/accessProcedure" */ './docs/11-access-procedure.md')],
  ['http 报文结构', 'messageStructure', () => import(/* webpackChunkName: "docs/network/messageStructure" */ './docs/12-message-structure.md')],
  ['http 请求方法', 'requestMethod', () => import(/* webpackChunkName: "docs/network/requestMethod" */ './docs/13-request-method.md')],
  ['URI 格式', 'uriFormat', () => import(/* webpackChunkName: "docs/network/uriFormat" */ './docs/14-uri-format.md')],
  ['响应状态码', 'statusCode', () => import(/* webpackChunkName: "docs/network/statusCode" */ './docs/15-status-code.md')]
  ['http 的特点', 'characteristic', () => import(/* webpackChunkName: "docs/network/characteristic" */ './docs/16-http-characteristic.md')]
];
