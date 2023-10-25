/**
 * 
 * @param req is an instance of http.IncomingMessage (https://nodejs.org/api/http.html#http_class_http_incomingmessage)
 *  plus some pre-built middlewares(https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
 * @param res is  an instance of http.ServerResponse (https://nodejs.org/api/http.html#http_class_http_serverresponse)
 *  plus some helper functions(https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
 */
export default function handler(req, res) {
  res.status(200).json({ text:'Hello' })
}

/**
 * Do Not Fecth an Api Rout from getStaticProps or getStaticPaths
 * You should not fetch an API route from getStatic Props or getStaticPaths. Instead, write your sever-side code directly in getStaticProps
 * or getStaticPaths (or call a helper function).
 * getStaticProps and getStaticPaths run only on the server-side and wil never run on the client-side.
 * 
 * A good use case for API Routes is handling from input. For example, you can create a form on your page and have it sned a POST request to your API Route.
 * You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write
 * server-side code.
 * 
 * Good use case for an API Route: Saving incoming data to your DB, Securely communicating with a third-party API, Previewing draft content from your CMS
 */