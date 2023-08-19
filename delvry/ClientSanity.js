import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

//connection to backend
const ClientSanity = sanityClient({
    projectId :"sfhlr95j",
    dataset:"production",
    useCdn: true,
    apiVersion:"2021-10-21"
});

const builder = imageUrlBuilder(ClientSanity);

export const urlFor = (source) =>builder.image(source)
export default ClientSanity;
