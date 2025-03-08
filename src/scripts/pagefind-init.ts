// Initialize Pagefind
export async function initPagefind() {
  try {
    const { default: pagefind } = await import('/static/pagefind/pagefind.js');
    await pagefind.init();
    return pagefind;
  } catch (error) {
    console.error('Failed to initialize Pagefind:', error);
    return null;
  }
} 