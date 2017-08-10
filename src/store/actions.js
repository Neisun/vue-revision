// 在这把方法暴露出去，形参是一个对象，state，commit
export const add = function ({commit,state}) {
    // commit用来提交方法
    commit("add");
}