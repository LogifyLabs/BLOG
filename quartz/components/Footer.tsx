import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        {/* ** 대신 <strong>, [글](링크) 대신 <a href="링크">글</a> 을 씁니다 */}
        <p>© 2026 <strong>Logify-Lab</strong>. Some Rights Reserved.</p>
        
        <p>
          이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ko" target="_blank">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.
        </p>
        
        <p>
          <a href="mailto:hyeyum@humanartmuseum.com">hyeyum@humanartmuseum.com</a>
        </p>
        
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
