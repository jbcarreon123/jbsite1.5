/** @param {import("@11ty/eleventy").UserConfig} cfg */
export default async function (cfg) {
    cfg.addPassthroughCopy({"public": "/"})
};

export const config = {
    dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        layouts: "_layouts",
    }
};