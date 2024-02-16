function parseData(rawData) {
    const parsedData = rawData.list.map(item => {
        return {
            type: item.type || '',
            thumbnailURL: item.thumbnail[0]?.url, //why is this expecting an : here?
            description: item.description || '',
            name: item.name || '',
            created: new Date(item.created) || null,
            branding: item.branding || '',
            duration: item.duration || 0,
            views: item.views || 0,
            categories: item.categories || [],
            id: item.id || null,
            origin: item.origin || null,
            url: item.url || '',
        };
    });

    return parsedData;
}

export {parseData};