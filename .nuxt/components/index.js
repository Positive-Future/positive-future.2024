export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as BackButton } from '../../components/navigation/BackButton.vue'
export { default as Credits } from '../../components/navigation/Credits.vue'
export { default as Disconnected } from '../../components/navigation/Disconnected.vue'
export { default as Footer } from '../../components/navigation/Footer.vue'
export { default as LanguagePicker } from '../../components/navigation/LanguagePicker.vue'
export { default as Logo } from '../../components/navigation/Logo.vue'
export { default as Particles } from '../../components/navigation/Particles.vue'
export { default as TopBar } from '../../components/navigation/TopBar.vue'

export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
export const LazyBackButton = import('../../components/navigation/BackButton.vue' /* webpackChunkName: "components/navigation/BackButton" */).then(c => c.default || c)
export const LazyCredits = import('../../components/navigation/Credits.vue' /* webpackChunkName: "components/navigation/Credits" */).then(c => c.default || c)
export const LazyDisconnected = import('../../components/navigation/Disconnected.vue' /* webpackChunkName: "components/navigation/Disconnected" */).then(c => c.default || c)
export const LazyFooter = import('../../components/navigation/Footer.vue' /* webpackChunkName: "components/navigation/Footer" */).then(c => c.default || c)
export const LazyLanguagePicker = import('../../components/navigation/LanguagePicker.vue' /* webpackChunkName: "components/navigation/LanguagePicker" */).then(c => c.default || c)
export const LazyLogo = import('../../components/navigation/Logo.vue' /* webpackChunkName: "components/navigation/Logo" */).then(c => c.default || c)
export const LazyParticles = import('../../components/navigation/Particles.vue' /* webpackChunkName: "components/navigation/Particles" */).then(c => c.default || c)
export const LazyTopBar = import('../../components/navigation/TopBar.vue' /* webpackChunkName: "components/navigation/TopBar" */).then(c => c.default || c)
