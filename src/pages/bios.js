import React from 'react'
import Page from '../components/Page'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Main from '../components/Main'
import H2 from '../components/H2'
import H3 from '../components/H3'
import H4 from '../components/H4'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'
import Anchor from '../components/Anchor'

export default () => (
  <Page>
    <Navigation />
    <Main>
      <H2>Meet Alisha and Chanel</H2>
<img src="/images/alishaheadshot.jpg" height="300"/>
      <H3>Alisha Acquaye</H3>
      <H4>Writer and Organizer </H4>
      <H4>@ali.the.prince </H4>
      <Paragraph>Alisha Acquaye uses words to examine the sweet spot where pop culture, social justice and personal narrative meet. As a Ghanaian American writer, her essays explore the weird, oppressive and sometimes empowering ways Western culture and society interacts with non male bodies, blackness, sexuality, relationships and gender.</Paragraph>
      <Paragraph>Through personal essays, interviews, op-eds and journalism, Alisha’s work invites readers to contemplate intersectional identities, media, art, pop culture and the small yet significant steps we can take to make our world more loving and inclusive. Her work has been featured in Elle, Teen Vogue, Catapult, OkayAfrica, The Establishment and more.</Paragraph>
      <Paragraph>When Alisha isn’t conjuring up stories, she co-organizes a bi monthly brunch series for women of color called Sister Circle Brunch. Focused on self care, community building, love and delicious, multicultural food, Sister Circle Brunch is a place for women to wind down, grow closer and remember that their presence is necessary and influential in this world. </Paragraph>
      <H4>Selected Work by Alisha</H4>
      <Paragraph>
        <Anchor to="https://catapult.co/stories/the-taste-of-grief"> On Family, Ghanaian Food and Grief (Catapult) </Anchor>
      </Paragraph>
      <Paragraph>
        <Anchor to="https://theestablishment.co/the-evolution-of-nude-black-women-in-art-70ea3993dfd4">On Black Women’s Nude Bodies and the Western Art Gaze (The Establishment)</Anchor>
      </Paragraph>
      <Paragraph>
        <Anchor to="http://www.teenvogue.com/story/missy-elliott-lifestream">On the Influence of Missy Elliott (Teen Vogue)</Anchor>
      </Paragraph>
      <Paragraph>
        <Anchor to="http://www.okayafrica.com/culture-2/joshua-kissi-photography-build-safe-haven-people-color-tonl">On Photography and Creating Spaces for People of Color (Okay Africa)</Anchor>
      </Paragraph>
      
      <img src="/images/chanelheadshot.jpg" height="300"/>
      <H3>Chanel Matsunami Govreau</H3>
      <H4>Artist and Educator </H4>
      <H4>@queengidrea </H4>
    
      <Paragraph>Chanel Matsunami Govreau is an interdisciplinary artist and youth educator based in Brooklyn, NY. Under her artist name, Queen Gidrea, she uses her body, face, regalia, and word as a site of performance storytelling. Her work is inhabited be fabulous character exaggerations and futuristic prophecies based on her experiences as a queer, multiracial, Japanese-American woman. </Paragraph>
      <Paragraph>As an experimental documentarian, her recent photography and video work explores a dance style called Waacking that originated in the gay Black and Latino community in 1970's California and its current re-emergence in the urban dance scenes across Asia. Through this work,  she strives to create new ways to confront cultural appropriation and improve intercultural education as the urban dance scene grows increasingly global. </Paragraph>
      <Paragraph>
        <Link to="http://queengidrea.com/">Chanel's Artist Website</Link>
        </Paragraph>
        <Paragraph>
        <Link to="https://www.artsconnectinternational.org/blog/index.php/2016/11/15/midnight-work">Waacking Project</Link>
        </Paragraph>
        <Paragraph>
        <Link to="https://vimeo.com/user5185842">Video work</Link>
        </Paragraph>
    </Main>
  </Page>
)