import React from 'react';

type LinkProps = React.ComponentPropsWithoutRef<'a'>;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, target, rel, ...props }, ref) => {
    const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href);
    const opensNewTab = target === '_blank';

    const computedRel = rel ?? (isExternal || opensNewTab ? 'noopener noreferrer' : undefined);

    return <a ref={ref} href={href} target={target} rel={computedRel} {...props} />;
  }
);

Link.displayName = 'Link';

export default Link;
