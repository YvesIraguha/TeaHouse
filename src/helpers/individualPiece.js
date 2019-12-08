import slug from "slug";

export const generateSlug = title => slug(title).toLowerCase();
