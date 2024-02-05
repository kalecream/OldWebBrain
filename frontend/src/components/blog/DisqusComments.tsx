//  https://codeytek.com/integrating-disqus-in-your-next-js-react-application/

import {DiscussionEmbed} from "disqus-react"

export const DisqusComments = (postId:string, title:string, slug:string) => {
  const disqusShortname = "sabrinamedwinter"

  const disqusConfig = {
    url: `https://www.sabrinamedwinter.com/post/${slug}`,
    identifier: postId,
    title: title 
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
