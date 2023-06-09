// Grid.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/organisms/grid/Grid'
).then((module) => self.customElements.define('o-grid', module.default))

export default {
  title: 'Organisms/Grid',
  component: 'o-grid'
}

export const Default = () =>
  html`
    <o-grid>
      <section>
        <div><p>Lorem Ipsum dolor ...</p></div>
        <div><p>Lorem Ipsum dolor ...</p></div>
      </section>
      <section>
        <div><p>Lorem Ipsum dolor ...</p></div>
        <div><p>Lorem Ipsum dolor ...</p></div>
      </section>
      <section>
        <div><p>Lorem Ipsum dolor ...</p></div>
        <div><p>Lorem Ipsum dolor ...</p></div>
      </section>
    </o-grid>
  `

export const TwoColumnsTwoRows = () => html`
  <h2>vertical</h2>
  <h3>first-container-vertical first-column-with="30%"</h3>
  <o-grid
    namespace="grid-2colums2rows-"
    first-container-vertical
    first-column-with="30%"
  >
    <section>
      <div
        style="background-color: var(--color); color: var(--background-color);"
      >
        CAT NAV Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        numquam est soluta, quis reiciendis fugiat alias, molestiae doloribus
        voluptates quia perferendis nemo magnam consequatur nobis sit facere,
        cum ab quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus, quisquam odit excepturi, repellendus minima, molestias
        mollitia fuga numquam commodi ab accusantium. Quas debitis eaque
        laudantium velit! Sapiente blanditiis molestiae vitae. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloribus autem quas dolores
        deleniti sequi culpa impedit quia sunt cum commodi quasi eos ipsum id,
        necessitatibus itaque, architecto libero, eaque aliquam.
      </div>
      <div style="background-color: var(--color-secondary);">
        TAG NAV Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt veritatis voluptatibus soluta tempora culpa distinctio nisi
        ratione reiciendis inventore unde rerum cumque, quos autem ipsum
        exercitationem temporibus vero deserunt voluptas.
      </div>
      <div style="background-color: var(--color-secondary);">
        CONTENT Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem, hic obcaecati. Magnam corrupti accusamus, dignissimos
        possimus aliquam ab doloremque mollitia! Odio mollitia consequuntur
        doloribus repellendus unde amet reiciendis nemo quia! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolore nisi aliquam dolorem
        facilis odio quae assumenda vitae, quas eius harum facere ipsum iusto
        culpa, reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis illo nesciunt,
        facilis officia excepturi corrupti saepe. Facilis fugit nobis molestiae
        dolor vitae vel, dolores temporibus deserunt, odio quis a quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, hic
        obcaecati. Magnam corrupti accusamus, dignissimos possimus aliquam ab
        doloremque mollitia! Odio mollitia consequuntur doloribus repellendus
        unde amet reiciendis nemo quia! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolore nisi aliquam dolorem facilis odio quae
        assumenda vitae, quas eius harum facere ipsum iusto culpa,
        reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Corporis illo nesciunt, facilis
        officia excepturi corrupti saepe. Facilis fugit nobis molestiae dolor
        vitae vel, dolores temporibus deserunt, odio quis a quam.
      </div>
    </section>
  </o-grid>
  <h3>first-container-vertical first-column-with="30%" no-mobile</h3>
  <o-grid
    no-mobile
    namespace="grid-2colums2rows-"
    first-container-vertical
    first-column-with="30%"
  >
    <section>
      <div
        style="background-color: var(--color); color: var(--background-color);"
      >
        CAT NAV Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        numquam est soluta, quis reiciendis fugiat alias, molestiae doloribus
        voluptates quia perferendis nemo magnam consequatur nobis sit facere,
        cum ab quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus, quisquam odit excepturi, repellendus minima, molestias
        mollitia fuga numquam commodi ab accusantium. Quas debitis eaque
        laudantium velit! Sapiente blanditiis molestiae vitae. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloribus autem quas dolores
        deleniti sequi culpa impedit quia sunt cum commodi quasi eos ipsum id,
        necessitatibus itaque, architecto libero, eaque aliquam.
      </div>
      <div style="background-color: var(--color-secondary);">
        TAG NAV Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt veritatis voluptatibus soluta tempora culpa distinctio nisi
        ratione reiciendis inventore unde rerum cumque, quos autem ipsum
        exercitationem temporibus vero deserunt voluptas.
      </div>
      <div style="background-color: var(--color-secondary);">
        CONTENT Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem, hic obcaecati. Magnam corrupti accusamus, dignissimos
        possimus aliquam ab doloremque mollitia! Odio mollitia consequuntur
        doloribus repellendus unde amet reiciendis nemo quia! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolore nisi aliquam dolorem
        facilis odio quae assumenda vitae, quas eius harum facere ipsum iusto
        culpa, reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis illo nesciunt,
        facilis officia excepturi corrupti saepe. Facilis fugit nobis molestiae
        dolor vitae vel, dolores temporibus deserunt, odio quis a quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, hic
        obcaecati. Magnam corrupti accusamus, dignissimos possimus aliquam ab
        doloremque mollitia! Odio mollitia consequuntur doloribus repellendus
        unde amet reiciendis nemo quia! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolore nisi aliquam dolorem facilis odio quae
        assumenda vitae, quas eius harum facere ipsum iusto culpa,
        reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Corporis illo nesciunt, facilis
        officia excepturi corrupti saepe. Facilis fugit nobis molestiae dolor
        vitae vel, dolores temporibus deserunt, odio quis a quam.
      </div>
    </section>
  </o-grid>
  <h3>first-container-vertical only two containers</h3>
  <o-grid namespace="grid-2colums2rows-" first-container-vertical>
    <section>
      <div
        style="background-color: var(--color); color: var(--background-color);"
      >
        CAT NAV Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        numquam est soluta, quis reiciendis fugiat alias, molestiae doloribus
        voluptates quia perferendis nemo magnam consequatur nobis sit facere,
        cum ab quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus, quisquam odit excepturi, repellendus minima, molestias
        mollitia fuga numquam commodi ab accusantium. Quas debitis eaque
        laudantium velit! Sapiente blanditiis molestiae vitae. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloribus autem quas dolores
        deleniti sequi culpa impedit quia sunt cum commodi quasi eos ipsum id,
        necessitatibus itaque, architecto libero, eaque aliquam.
      </div>
      <div style="background-color: var(--color-secondary);">
        TAG NAV Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt veritatis voluptatibus soluta tempora culpa distinctio nisi
        ratione reiciendis inventore unde rerum cumque, quos autem ipsum
        exercitationem temporibus vero deserunt voluptas.
      </div>
    </section>
  </o-grid>
  <hr />
  <h2>horizontal</h2>
  <h3>first-container-horizontal</h3>
  <o-grid namespace="grid-2colums2rows-" first-container-horizontal>
    <section>
      <div
        style="background-color: var(--color); color: var(--background-color);"
      >
        CAT NAV Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        numquam est soluta, quis reiciendis fugiat alias, molestiae doloribus
        voluptates quia perferendis nemo magnam consequatur nobis sit facere,
        cum ab quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus, quisquam odit excepturi, repellendus minima, molestias
        mollitia fuga numquam commodi ab accusantium. Quas debitis eaque
        laudantium velit! Sapiente blanditiis molestiae vitae. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloribus autem quas dolores
        deleniti sequi culpa impedit quia sunt cum commodi quasi eos ipsum id,
        necessitatibus itaque, architecto libero, eaque aliquam.
      </div>
      <div style="background-color: var(--color-secondary);">
        TAG NAV Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt veritatis voluptatibus soluta tempora culpa distinctio nisi
        ratione reiciendis inventore unde rerum cumque, quos autem ipsum
        exercitationem temporibus vero deserunt voluptas.
      </div>
      <div style="background-color: var(--color-secondary);">
        CONTENT Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem, hic obcaecati. Magnam corrupti accusamus, dignissimos
        possimus aliquam ab doloremque mollitia! Odio mollitia consequuntur
        doloribus repellendus unde amet reiciendis nemo quia! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolore nisi aliquam dolorem
        facilis odio quae assumenda vitae, quas eius harum facere ipsum iusto
        culpa, reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis illo nesciunt,
        facilis officia excepturi corrupti saepe. Facilis fugit nobis molestiae
        dolor vitae vel, dolores temporibus deserunt, odio quis a quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, hic
        obcaecati. Magnam corrupti accusamus, dignissimos possimus aliquam ab
        doloremque mollitia! Odio mollitia consequuntur doloribus repellendus
        unde amet reiciendis nemo quia! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolore nisi aliquam dolorem facilis odio quae
        assumenda vitae, quas eius harum facere ipsum iusto culpa,
        reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Corporis illo nesciunt, facilis
        officia excepturi corrupti saepe. Facilis fugit nobis molestiae dolor
        vitae vel, dolores temporibus deserunt, odio quis a quam.
      </div>
    </section>
  </o-grid>
  <h3>first-container-horizontal only two containers</h3>
  <o-grid namespace="grid-2colums2rows-" first-container-horizontal>
    <section>
      <div
        style="background-color: var(--color); color: var(--background-color);"
      >
        CAT NAV Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        numquam est soluta, quis reiciendis fugiat alias, molestiae doloribus
        voluptates quia perferendis nemo magnam consequatur nobis sit facere,
        cum ab quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus, quisquam odit excepturi, repellendus minima, molestias
        mollitia fuga numquam commodi ab accusantium. Quas debitis eaque
        laudantium velit! Sapiente blanditiis molestiae vitae. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloribus autem quas dolores
        deleniti sequi culpa impedit quia sunt cum commodi quasi eos ipsum id,
        necessitatibus itaque, architecto libero, eaque aliquam.
      </div>
      <div style="background-color: var(--color-secondary);">
        CONTENT Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem, hic obcaecati. Magnam corrupti accusamus, dignissimos
        possimus aliquam ab doloremque mollitia! Odio mollitia consequuntur
        doloribus repellendus unde amet reiciendis nemo quia! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolore nisi aliquam dolorem
        facilis odio quae assumenda vitae, quas eius harum facere ipsum iusto
        culpa, reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis illo nesciunt,
        facilis officia excepturi corrupti saepe. Facilis fugit nobis molestiae
        dolor vitae vel, dolores temporibus deserunt, odio quis a quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, hic
        obcaecati. Magnam corrupti accusamus, dignissimos possimus aliquam ab
        doloremque mollitia! Odio mollitia consequuntur doloribus repellendus
        unde amet reiciendis nemo quia! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolore nisi aliquam dolorem facilis odio quae
        assumenda vitae, quas eius harum facere ipsum iusto culpa,
        reprehenderit, nesciunt non debitis eligendi quidem? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Corporis illo nesciunt, facilis
        officia excepturi corrupti saepe. Facilis fugit nobis molestiae dolor
        vitae vel, dolores temporibus deserunt, odio quis a quam.
      </div>
    </section>
  </o-grid>
`
