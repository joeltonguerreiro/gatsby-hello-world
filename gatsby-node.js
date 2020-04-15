const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
    actions: { createNode, createParentChildLink },
    createNodeId,
    createContentDigest,
}) => {
    // get data from GitHub API at build time
    
    
    try {
        // const result = await fetch(`http://concebe.local/api/clients`)
    
    
        // const resultData = await result.json()
        // // create node for build time data example in the docs

        // resultData.clients.forEach(client => {
        //     const node = {
        //         clientId: client.id,
        //         clientName: client.name,
        //         id: createNodeId(`Client-${client.name}`),
        //         internal: {
        //             type: 'Client',
        //             contentDigest: createContentDigest(client)
        //         }
        //     }

        //     createNode(node)
        // });
    
    } finally {resp => console.log(resp)}
    
}