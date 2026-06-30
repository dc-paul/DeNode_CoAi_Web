import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      staging: "uaw2u-wqaaa-aaaal-as2cq-cai",
      production: "uhx4a-3iaaa-aaaal-as2ca-cai",
    },
    hosting: {
      source: "dist",
      predeploy: ["npm run build"],
    },
  },
});
