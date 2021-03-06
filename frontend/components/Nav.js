import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Signup' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
        <Link href={href}>
          <a>{label}</a>
        </Link>
        </li>
      ))}
    </ul>

    
  </nav>
)

export default Nav
