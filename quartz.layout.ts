import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// quartz.layout.ts 파일
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {}, // 요렇게 비워두면 하단 링크가 싹 사라집니다.
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
// quartz.layout.ts 약 34~38행 사이 수정

  right: [
    Component.Graph({
      localGraph: {
        repelForce: 0.8,      // 숫자가 클수록 노드끼리 멀리 밀어냄 (기본 0.5)
        linkDistance: 50,     // 노드 사이의 선 길이
        fontSize: 0.6,        // 노드 아래 글자 크기
      },
      globalGraph: {
        repelForce: 0.8,
        linkDistance: 50,
        fontSize: 0.6,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
