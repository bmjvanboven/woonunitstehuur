/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fase 1: marketingsite zonder Payload, zodat de build geen database nodig heeft.
  // In de CMS-stap weer inschakelen met:  import { withPayload } from '@payloadcms/next/withPayload'
  //                                       export default withPayload(nextConfig)
}

export default nextConfig
