export type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;


let data = [
  {
    id: 1,
    task: "play games",
    checked: true,
  },
  {
    id: 2,
    task: "play code",
    checked: true,
  }
]
export interface IResolverMap {
  [field: string]: ResolverFn;
}
