
//import { SanityDocument } from "next-sanity";
import { createClient, groq } from "next-sanity";
import { Post } from "../../typings";
//import {apiVersion, dataset, projectId} from './env'
const config={
  projectId: process.env.SANITY_PROJECT_ID,//projectId,
  dataset: process.env.SANITY_DATASET,//'production',
  apiVersion: process.env.SANITY_API_VERSION || '2023-05-03',//'2023-06-19',
  useCdn: false,
  
}
export const saniClient=createClient(config);
export async function getPosts(): Promise<Post[]> {
  return await createClient(config).fetch(// chef->{name}, "cat":cat->slug.current
    groq`*[_type == "post"]{
        title, cat,
      price,  type, description,
      "slug":slug.current,
      "image":image.asset->url,
      
    }`,{},{next: {
        revalidate: 600 // look for updates to revalidate cache 5 minutes
      }}
    
  )
}
/*export async function getDishesbyCategory(cat:string): Promise<Dish[]> {
  return await createClient(config).fetch(// chef->{name},
    groq`*[_type == 'dish' && cat->slug.current==$cat ]{
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat": cat->slug.current
    }`,
    { cat }
  )
}*/
//excluding our friday and wednesday specials hich is bbq and chifrychci
export async function getPostsbyCategory(cat:string): Promise<Post[]> {
  return await createClient(config).fetch(// chef->{name},
    groq`*[_type == 'post' && cat->slug.current==$cat ]{
        _id, title,
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat": cat->slug.current
    }`,
    { cat },{next: {
        revalidate: 600 // look for updates to revalidate cache 5 minutes
      }}
  )
}
export async function getPost(slug: string): Promise<Post> {
  return await createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id, title,
      price, name, type, description, 
      "slug": slug.current,
      "image": image.asset->url,
      "cat": cat->slug.current
    }`,
    { slug },{next: {
        revalidate: 3600 // look for updates to revalidate cache every hour
      }}
  )
}
  /*perspective: 'published',
    studioUrl: '/studio',
    logger: console,*/
  //token:process.env.sanityToken