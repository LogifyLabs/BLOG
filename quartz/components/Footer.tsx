import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        {/* <hr /> 이 줄을 지웠습니다! 이제 선이 안 나올 거예요. */}
        <p>© 2026 <strong>Logify-Lab</strong>. All Rights Reserved.</p>
        <p>
          이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ko" target="_blank">CC BY-NC-ND 4.0</a>에 따라 이용할 수 있습니다.
        </p>
        <p>
          <a href="mailto:hyeyum@humanartmuseum.com">hyeyum@humanartmuseum.com</a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor