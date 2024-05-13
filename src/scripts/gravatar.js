import { createHash } from 'crypto';

export async function gravatar(element, email) {
    if (!element) {
        return;
    }
    const trimmed = email.trim().toLowerCase();
    const hash = createHash('sha256');
    hash.update(trimmed);
    const hashedEmail = hash.digest('hex');
    const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}?s=300=&d=404`;
    element.src = gravatarUrl;
}