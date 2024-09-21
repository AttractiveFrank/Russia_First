import { TextBlogCard, VideoBlogCard } from "../../components/Cards"
import { blogCardInfo } from "../../constant/group"

const BlogSection = () => (
  <div className="portfolioSection section">
    <div className="sectionHeader">
      <p className="sectionTitle" style={{ padding: '0 clamp(0px, 4vw, 64px)' }}>Блог #ЗаводШоу</p>
    </div>
    <div className="flexWrapAround" style={{ gap: 'clamp(20px, 3vw, 40px)' }}>
      {blogCardInfo.map((item, index) => (
        item.type === 'text' ? <TextBlogCard key={index} item={item} /> : <VideoBlogCard key={index} item={item} />
      ))}
    </div>
  </div>
)

export default BlogSection