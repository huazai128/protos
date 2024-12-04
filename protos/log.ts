// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.3
//   protoc               v5.28.2
// source: log.proto

/* eslint-disable */
import { Observable } from "rxjs";

export const protobufPackage = "logproto";

export enum TransportCategory {
  /** PV - 页面浏览 */
  PV = 0,
  /** PREF - 性能 */
  PREF = 1,
  /** EVENT - 事件 */
  EVENT = 2,
  /** CUSTOM - 自定义 */
  CUSTOM = 3,
  /** API - API 请求 */
  API = 4,
  /** ERROR - 错误 */
  ERROR = 5,
  /** RV - 视频 */
  RV = 6,
  /** USER - 用户 */
  USER = 7,
  UNRECOGNIZED = -1,
}

/** 日志类型 */
export enum MetricsName {
  /** FP - 首次绘制 */
  FP = 0,
  /** FCP - 首次内容绘制 */
  FCP = 1,
  /** FMP - 首次有意义绘制 */
  FMP = 2,
  /** NT - 导航时间 */
  NT = 3,
  /** RF - 资源流 */
  RF = 4,
  /** RCR - 路由变化记录 */
  RCR = 5,
  /** CBR - 点击行为记录 */
  CBR = 6,
  /** CDR - 自定义定义记录 */
  CDR = 7,
  /** HT - HTTP 记录 */
  HT = 8,
  /** CE - 变化曝光 */
  CE = 9,
  /** JS - JS */
  JS = 10,
  /** RS - 资源 */
  RS = 11,
  /** UJ - 未处理的拒绝 */
  UJ = 12,
  /** CS - CORS */
  CS = 13,
  /** REACT - React */
  REACT = 14,
  /** HTS - HTTP */
  HTS = 15,
  UNRECOGNIZED = -1,
}

/** 引用类型 */
export enum RefType {
  /** ApiLog - API 日志 */
  ApiLog = 0,
  /** EventLog - 事件日志 */
  EventLog = 1,
  /** ErrorLog - 错误日志 */
  ErrorLog = 2,
  /** PrefLog - 性能日志 */
  PrefLog = 3,
  /** PvLog - 页面浏览日志 */
  PvLog = 4,
  /** CustomLog - 自定义日志 */
  CustomLog = 5,
  /** UserLog - 用户日志 */
  UserLog = 6,
  UNRECOGNIZED = -1,
}

export interface LogRequest {
  /** 唯一索引 */
  id: number;
  /** 报告类型 */
  reportsType: MetricsName;
  /** 错误 UUID */
  errorUUid: string;
  /** 站点 ID */
  siteId: string;
  /** 模型引用类型 */
  onModel: RefType;
  /** 内容引用 */
  doce:
    | { [key: string]: any }
    | undefined;
  /** 日志类别 */
  category: TransportCategory;
  /** 用户 ID */
  userId: string;
  /** 标题 */
  title: string;
  /** 路径 */
  path: string;
  /** URL */
  href: string;
  /** 方法 */
  method: string;
  /** 请求 URL */
  url: string;
  /** 请求体参数 */
  body:
    | { [key: string]: any }
    | undefined;
  /** 请求参数 */
  params:
    | { [key: string]: any }
    | undefined;
  /** 响应 */
  response:
    | Response
    | undefined;
  /** 错误信息 */
  value: string;
  /** IP 地址 */
  ip: string;
  /** 创建时间 */
  createAt:
    | Date
    | undefined;
  /** 更新时间 */
  updateAt:
    | Date
    | undefined;
  /** 追踪 ID */
  traceId: string;
}

/** 响应消息定义 */
export interface Response {
  code: number;
  msg: string;
  data: { [key: string]: any } | undefined;
}

export interface LogResponse {
  id: number;
}

export interface SiteService {
  /** 保存走kafka, 不过两种都支持 */
  saveLog(request: LogRequest): Observable<LogResponse>;
}
