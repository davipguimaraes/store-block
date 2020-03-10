import React from 'react'
import { useQuery } from 'react-apollo'

import { useCssHandles } from 'vtex.css-handles'
import getGif from './queries/gifs.gql';

const CSS_HANDLES = ['gif'] as const 

const Gif: StorefrontFunctionComponent<GifProps> = ({ term ='nada nada nada nada' }) => {
  
    const handles = useCssHandles(CSS_HANDLES)
    const { data, loading } = useQuery(getGif, {
        variables: { term }
    })
    if( loading ) return null;

    return (
        <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
            { data?.gif && <img src={data.gif} />}
        </div>
    ) 
}

interface GifProps {
    term: string
}

Gif.schema = {
    title: 'editor.countdown-gif.title',
    description: 'editor.countdown-gif.description',
    type: 'object',
    properties: {
        term: {
            title: 'Nome do gif',
            type: 'string',
            default: null
        }
    }
}

export default Gif