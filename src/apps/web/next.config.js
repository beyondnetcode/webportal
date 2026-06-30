//@ts-check

const { withPayload } = require('@payloadcms/next/withPayload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js options go here
};

module.exports = withPayload(nextConfig);
