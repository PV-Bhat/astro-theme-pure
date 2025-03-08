// Initialize Pagefind
export async function initPagefind() {
  try {
    const pagefind = await import('@pagefind/default-ui').then(module => module.default);
    await pagefind.init();
    return pagefind;
  } catch (error) {
    console.error('Failed to initialize Pagefind:', error);
    return null;
  }
} 