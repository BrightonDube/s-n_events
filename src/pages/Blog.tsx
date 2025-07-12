import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, Tag, Clock, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Markdown from "@/components/Markdown";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const categories = [
  "All Posts",
  "Wedding Planning",
  "Corporate Events", 
  "Event Trends",
  "Planning Tips",
  "Décor Ideas",
  "Behind the Scenes"
];

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Wedding Planning Tips for South African Couples",
    excerpt: "Planning your dream wedding can feel overwhelming. Here are our top 10 tips to help you navigate the process smoothly and create the perfect celebration in South Africa.",
    content: `Planning a wedding is one of life's most exciting yet challenging endeavors. After planning hundreds of weddings across South Africa, we've compiled the essential tips that every couple should know.

**1. Start Early and Set Your Budget**
Begin planning at least 12-18 months in advance, especially for peak wedding seasons. Set a realistic budget early and allocate funds wisely: 40% for venue and catering, 20% for photography, 15% for attire, and 25% for everything else.

**2. Choose Your Venue Strategically**
South Africa offers incredible venues from wine estates in the Cape to bush lodges in Mpumalanga. Consider your guest count, season, and accessibility. Book popular venues early as they fill up quickly.

**3. Weather Considerations**
South African weather can be unpredictable. Plan for contingencies, especially for outdoor ceremonies. Summer brings afternoon thunderstorms, while winter can be unexpectedly cold.

**4. Local Supplier Network**
Build relationships with reliable local suppliers. South Africa has incredible talent - from florists who understand indigenous flowers to caterers who can blend traditional and contemporary cuisines.

**5. Cultural Integration**
Embrace South Africa's rich cultural diversity. Consider incorporating traditional elements like jumping the broom, lobola ceremonies, or having multiple cultural celebrations.

**6. Timeline Management**
Create detailed timelines for your wedding day. Factor in South African time - build buffer periods into your schedule. Communication is key with all vendors.

**7. Guest Management**
Use digital tools for RSVPs and guest management. Consider dietary requirements and cultural preferences when planning your menu.

**8. Photography Investment**
Invest in quality photography and videography. South African landscapes provide stunning backdrops - make sure you capture these memories professionally.

**9. Legal Requirements**
Understand South African marriage requirements. Ensure all documentation is in order well before your wedding day. Non-residents need additional paperwork.

**10. Enjoy the Process**
Remember why you're doing this - to celebrate your love. Don't get lost in perfectionism. The most memorable weddings have genuine emotion and joy.

At S&N Events, we guide couples through every step of this journey, ensuring your special day reflects your unique love story while honoring South African traditions and beauty.`,
    category: "Wedding Planning",
    author: "Nono",
    date: "2025-06-25",
    readTime: "8 min read",
    image: "/src/assets/sa-wedding-decor6.jpg",
    tags: ["Wedding Tips", "Planning", "South Africa", "Budget"]
  },
  {
    id: 2,
    title: "Corporate Event Trends 2025: What's Hot in South African Business Events",
    excerpt: "From hybrid experiences to sustainable practices, discover the latest trends shaping corporate events in South Africa and how to incorporate them into your next business gathering.",
    content: `The corporate events landscape in South Africa is evolving rapidly. As we move into 2025, several key trends are reshaping how businesses connect, celebrate, and communicate.

**Hybrid Event Experiences**
Post-pandemic, hybrid events have become the norm rather than the exception. South African companies are embracing technology to connect Johannesburg offices with Cape Town teams and international partners simultaneously.

Key considerations:
- High-quality streaming equipment
- Interactive virtual components
- Seamless integration between physical and digital attendees
- Time zone considerations for international participants

**Sustainability Focus**
Environmental consciousness is driving major changes in corporate event planning. South African companies are leading the way in eco-friendly practices:

- Zero-waste catering with locally sourced ingredients
- Digital invitations and programs
- Renewable energy powered venues
- Carbon offset programs for travel
- Locally sourced décor and flowers

**Authentic South African Experiences**
Companies are moving away from generic corporate events toward authentic, culturally rich experiences that showcase South Africa's unique heritage:

- Traditional South African cuisine with modern twists
- Local entertainment including marimba bands and traditional dancers
- Venues that highlight natural beauty and cultural significance
- Art installations by local artists
- Wine pairings featuring South African vintages

**Technology Integration**
Smart technology is enhancing attendee experiences:

- AI-powered networking apps
- Augmented reality product demonstrations
- Real-time polling and feedback systems
- Contactless check-in processes
- Interactive digital displays

**Wellness-Focused Events**
Mental health and wellness are becoming central themes:

- Mindfulness sessions and meditation breaks
- Healthy catering options
- Outdoor venues and nature integration
- Movement and stretching sessions
- Stress-reduction activities

**Micro-Events and Intimate Gatherings**
Quality over quantity is the new mantra:

- Smaller, more focused guest lists
- Personalized experiences
- Higher per-person investment
- Deeper networking opportunities
- More meaningful connections

**Local Community Engagement**
Corporate social responsibility is being woven into events:

- Partnerships with local charities
- Community upliftment initiatives
- Supporting local businesses and suppliers
- Skills development workshops
- Environmental restoration projects

**Flexible Venues and Spaces**
The demand for adaptable spaces is growing:

- Multi-functional venues
- Outdoor and open-air options
- Easy reconfiguration capabilities
- Technology-ready infrastructure
- Health and safety compliance

**Data-Driven Decision Making**
Analytics are informing every aspect of event planning:

- Attendee behavior tracking
- ROI measurement tools
- Real-time feedback collection
- Post-event impact analysis
- Predictive planning for future events

**Cultural Sensitivity and Inclusion**
Events are becoming more inclusive and culturally aware:

- Multilingual support (English, Afrikaans, Zulu, Xhosa)
- Diverse catering options
- Accessibility considerations
- Cultural celebration integration
- Inclusive networking opportunities

At S&N Events, we stay ahead of these trends to deliver cutting-edge corporate experiences that resonate with modern South African businesses and their global partners.`,
    category: "Corporate Events",
    author: "Shanna",
    date: "2025-06-25",
    readTime: "12 min read",
    image: "/src/assets/corporate-2.jpg",
    tags: ["Corporate Events", "Trends", "2025", "Business", "Technology"]
  },
  {
    id: 3,
    title: "The Art of Event Décor: Creating Memorable Atmospheres",
    excerpt: "Discover how thoughtful décor design can transform any space into an unforgettable experience. Learn about color psychology, lighting techniques, and spatial design.",
    content: `Event décor is more than just decoration—it's about creating an atmosphere that tells a story, evokes emotions, and leaves lasting impressions. At S&N Events, we believe that exceptional décor design is both an art and a science.

**Understanding Color Psychology**
Colors have profound psychological effects on mood and behavior. Our décor choices strategically leverage this:

*Warm Colors (Reds, Oranges, Yellows):*
- Create energy and excitement
- Perfect for celebrations and parties
- Encourage social interaction and appetite
- Best used as accent colors in corporate settings

*Cool Colors (Blues, Greens, Purples):*
- Promote calm and professionalism
- Ideal for corporate events and formal occasions
- Create sense of trust and reliability
- Work well in large spaces

*Neutral Colors (Whites, Grays, Beiges):*
- Provide sophisticated backdrop
- Allow other elements to shine
- Create timeless elegance
- Versatile for any event type

**Lighting: The Game Changer**
Lighting can completely transform a space and mood:

*Ambient Lighting:*
- Sets the overall mood
- Should be warm and inviting
- Dimmable options for different event phases
- Consider natural light integration

*Accent Lighting:*
- Highlights key areas and décor elements
- Spotlights for centerpieces and displays
- Colored lighting for theme reinforcement
- Creates visual interest and depth

*Task Lighting:*
- Functional lighting for specific activities
- Reading menus, signing documents
- Photography and videography needs
- Safety and navigation

**Spatial Design Principles**
Effective décor considers the entire space:

*Flow and Movement:*
- Clear pathways for guest circulation
- Strategic placement of furniture and décor
- Multiple focal points to distribute crowds
- Accessibility considerations

*Proportion and Scale:*
- Décor elements sized appropriately for space
- Varying heights for visual interest
- Balance between filled and empty space
- Consider venue architecture

*Focal Points:*
- Strategic placement of eye-catching elements
- Entrance displays to create impact
- Stage or presentation area enhancement
- Photo-worthy backdrops

**Seasonal and Cultural Considerations**
South African events benefit from our diverse cultural heritage:

*Spring Events (September-November):*
- Fresh florals and light colors
- Outdoor integration with blooming gardens
- Pastel color palettes
- Natural texture incorporation

*Summer Events (December-February):*
- Bright, vibrant colors
- Water feature integration
- Lightweight fabrics and materials
- Heat consideration for installations

*Autumn Events (March-May):*
- Rich, warm color palettes
- Natural elements like wheat and leaves
- Cozy, intimate lighting
- Harvest-inspired centerpieces

*Winter Events (June-August):*
- Deep, luxurious colors
- Dramatic lighting effects
- Textural elements for warmth
- Candle and fireplace integration

**Sustainable Décor Practices**
Environmental responsibility shapes our design approach:

- Locally sourced flowers and materials
- Reusable and repurposable elements
- Digital displays instead of printed materials
- Eco-friendly fabric choices
- Living plants that guests can take home

**Technology Integration**
Modern décor incorporates technological elements:

- LED installations and interactive displays
- Projection mapping for dynamic backgrounds
- Sound-reactive lighting systems
- Digital photo frames and displays
- Augmented reality experiences

**Budget-Smart Décor Strategies**
Beautiful décor doesn't require unlimited budgets:

*High-Impact, Low-Cost Elements:*
- Strategic lighting to transform spaces
- Fabric draping for elegant backdrops
- Grouped candles for romantic ambiance
- Greenery and foliage for natural beauty

*Investment Pieces:*
- Quality linens and tableware
- Statement centerpieces
- Professional lighting equipment
- Versatile furniture pieces

**Cultural Sensitivity in Décor**
South African events celebrate diversity:

- Incorporating traditional patterns and textiles
- Using indigenous flowers and plants
- Respecting cultural color significance
- Blending modern and traditional elements
- Creating inclusive visual narratives

At S&N Events, our décor team combines artistic vision with practical expertise to create spaces that not only look beautiful but also function perfectly for your event's unique needs.`,
    category: "Décor Ideas",
    author: "Nono",
    date: "2025-06-25",
    readTime: "10 min read",
    image: "/src/assets/muse-concepts-017.jpg",
    tags: ["Décor", "Design", "Color Psychology", "Lighting", "Atmosphere"]
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AuroraBackground className="h-[60vh]" showRadialGradient={true}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-accent text-center">
            Event Planning Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-muted-foreground">
            Tips, trends, and insights for creating unforgettable intimate celebrations
          </p>
        </motion.div>
      </AuroraBackground>

      {/* Search and Filter */}
      <section className="py-8 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-brand-accent mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-brand-primary" />
                        <span className="text-brand-primary font-medium">{post.author}</span>
                      </div>
                      <span className="text-xs bg-brand-secondary text-brand-accent px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button 
                      variant="primary" 
                      className="w-full mt-4"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-brand-accent mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team bring your vision to life with professional planning and stunning décor
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
              <h2 className="font-serif text-2xl font-bold text-brand-accent">{selectedPost.title}</h2>
              <Button 
                variant="secondary" 
                size="icon" 
                onClick={() => setSelectedPost(null)}
                className="rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {selectedPost.readTime}
                </div>
              </div>
              
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="prose prose-pink max-w-none">
                <Markdown>{selectedPost.content}</Markdown>
              </div>
              
              <div className="mt-8 pt-4 border-t">
                <h4 className="font-medium mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-white p-4 border-t">
              <Button 
                variant="primary" 
                onClick={() => setSelectedPost(null)}
                className="w-full"
              >
                Close Article
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}