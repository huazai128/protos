// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.27.1
// source: common/query_dto.proto

/* eslint-disable */

export const protobufPackage = "";

export interface QueryDTO {
  category: string;
  sort: number;
  reportsType: string;
  traceId: string;
  kw: string;
  siteId: string;
  /** 请求时间 */
  startTime: number;
  /** 响应时间 */
  endTime: number;
  timeSlot: number;
  keyId: string;
  keywordParmas: { [key: string]: any } | undefined;
  page: number;
  size: number;
  total: number;
  cursor: string;
}
