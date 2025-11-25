import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'my-app',
  webDir: '../../dist/apps/my-app',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
