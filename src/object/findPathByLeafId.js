/**
 * 根据 key 递归查找链带关系
 * @param {sting} leafIdName
 * @param {any} leafId
 * @param {array} nodes 被查找的数组
 * @param {array} path 非必填
 * @param {array} path 非必填
 * @example let arr = [
                    {
                        name:'awefawef',
                        id:111,
                        children:[
                            {
                                name:'2222222aaa',
                                id:222,
                                children:[
                                    {
                                        name:'cccccaaa',
                                        id:333,
                                    }
                                ]
                            }
                        ]
                }
            ]
            findPathByLeafId('id',333,arr) // => [{"id":111,"value":"awefawef"},{"id":222,"value":"2222222aaa"}]
 */
const findPathByLeafId = (leafIdName,leafId, nodes, path = []) => {
    for(var i = 0; i < nodes.length; i++) {
        var tmpPath = [...path];
        if(leafId == nodes[i][leafIdName]) {
            return tmpPath;
        }

        tmpPath.push({
            [leafIdName]:nodes[i][leafIdName],
            value:nodes[i].name
        });
        if(nodes[i].children) {
            let findResult = findPathByLeafId(leafIdName,leafId, nodes[i].children, tmpPath);
            if(findResult) {
                return findResult;
            }
        }
    }
}

module.exports = findPathByLeafId
