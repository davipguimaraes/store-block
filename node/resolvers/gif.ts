export const gif = async (
    _: any,
    { term }: { term: string },
    { clients: { giphy }}: Context
) => {
    const res = await giphy.translate(term);
    return res.data.images.original.url;
}