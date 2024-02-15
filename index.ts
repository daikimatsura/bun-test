import { $ } from "bun";

const s3List = await $`aws s3 ls --profile ${process.env.PROFILE_NAME}`.text();
console.log(s3List);
