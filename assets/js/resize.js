function resizeIframe(obj) {
  try {
    const documentElement = obj.contentDocument.documentElement;
    const body = obj.contentDocument.body;

    obj.style.height = '0px';
    const height = Math.max(
      documentElement ? documentElement.scrollHeight : 0,
      documentElement ? documentElement.offsetHeight : 0,
      body ? body.scrollHeight : 0,
      body ? body.offsetHeight : 0
    );

    obj.style.height = `${height}px`;

    if (!obj.dataset.resizeObserved && window.ResizeObserver) {
      const observer = new ResizeObserver(() => resizeIframe(obj));
      observer.observe(documentElement);
      obj.dataset.resizeObserved = 'true';
    }
  } catch (error) {
    console.warn('Could not resize iframe:', error);
  }
}
