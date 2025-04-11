class LocalStorageManager {
  private static readonly KEY = "infohub.likedPosts";

  private static isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  static getLikedPosts(): number[] {
    if (!this.isBrowser()) return [];

    try {
      const item = localStorage.getItem(this.KEY);
      return item ? JSON.parse(item) : [];
    } catch {
      return [];
    }
  }

  static setLikedPosts(likedPosts: number[]): void {
    if (!this.isBrowser()) return;

    try {
      localStorage.setItem(this.KEY, JSON.stringify(likedPosts));
    } catch {
      // Silenciosamente ignora erros (ou loga, se preferir)
    }
  }

  static addLikedPost(postId: number): void {
    const likedPosts = this.getLikedPosts();
    if (!likedPosts.includes(postId)) {
      likedPosts.push(postId);
      this.setLikedPosts(likedPosts);
    }
  }

  static removeLikedPost(postId: number): void {
    const likedPosts = this.getLikedPosts();
    const updated = likedPosts.filter((id) => id !== postId);
    this.setLikedPosts(updated);
  }
}

export default LocalStorageManager;
