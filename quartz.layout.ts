import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {}, 
  }),
}

// 1. 일반 노트 페이지 레이아웃 (여기서도 폴더가 펼쳐져야 함!)
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
    // ★ 여기서도 옵션을 넣어줘야 합니다!
    Component.Explorer({
      folderClickBehavior: "collapse", 
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        repelForce: 6.0,
        linkDistance: 100,
        fontSize: 0.8,
        centerForce: 0.5,
        showOrphans: true,
      },
      globalGraph: {
        repelForce: 6.0,
        linkDistance: 100,
        fontSize: 0.8,
        centerForce: 0.5,
        showOrphans: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// 2. 폴더/리스트 페이지 레이아웃 (사용자님이 고치셨던 부분)
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
    // ★ 여기도 옵션 적용 완료
    Component.Explorer({
      folderClickBehavior: "collapse", 
    }),
  ],
  right: [],
}