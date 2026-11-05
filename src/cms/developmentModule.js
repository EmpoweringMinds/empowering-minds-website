import { sanityClient } from "./sanityClient";
import { developmentModuleQuery } from "./queries";
import { imageUrl } from "./imageURL";

function normalizeDevelopmentModule(developmentModule) {
    return {
        id: developmentModule._id,
        title: developmentModule.title || "",
        slug: developmentModule.slug || "",
        description: developmentModule.shortDescription || "",
        fullDescription: developmentModule.fullDescription || "",
        image: developmentModule.coverImage
        ? imageUrl(developmentModule.coverImage)
            .width(900)
            .height(600)
            .fit("crop")
            .url()
        : null,
        displayOrder: developmentModule.displayOrder ??  0,
        isActive: developmentModule.isActive ?? false,
        };
}

export async function getDevelopmentModules() {
  const developmentModule = await sanityClient.fetch(developmentModuleQuery);
  return developmentModule.map(normalizeDevelopmentModule);
}