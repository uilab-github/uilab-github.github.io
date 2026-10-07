<template>
  <div class="lab-intro v-padded">
    <div class="intro">
      <p class="lead">
        The <strong>Users &amp; Information Lab (U&I Lab)</strong> is a research group in the
        School of Computing at KAIST, led by Alice Oh. Our mission is to <strong>make AI work well
        for everyone, across languages, cultures, and communities</strong>. We build benchmarks,
        datasets, and evaluation frameworks that reveal how large language models understand
        people, and develop methods that make them more inclusive, safe, and socially aware.
      </p>
      <div class="intro-brand">
        <img class="intro-logo" src="@/assets/logo.png" alt="" />
        <div class="intro-brand-text">USERS &amp;<br />INFORMATION</div>
      </div>
    </div>
    <h3 class="row-title">Research Themes</h3>
    <div class="themes">
      <div
        class="theme"
        v-for="theme in themes"
        :key="theme.title"
        :style="{ borderTopColor: accentOf(theme) }"
      >
        <h4 class="theme-title">{{ theme.title }}</h4>
        <p class="theme-desc">{{ theme.description }}</p>
        <div class="theme-examples">{{ theme.examples.join(' · ') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// Themes are written by hand (they are not in the Google Spreadsheet).
// `tags` are tag ids from the Tags sheet; the first one picks the card's accent color.
const THEMES = [
  {
    title: 'Culture-Aware & Multilingual AI',
    description: 'Do LLMs understand everyday knowledge, values, and norms beyond English? We build benchmarks for diverse languages and cultures, study code-switching, and develop open Korean language resources.',
    examples: ['BLEnD', 'CLIcK', 'Global MMLU', 'KORMo'],
    tags: ['cc', 'nlp']
  },
  {
    title: 'Evaluating LLMs',
    description: 'Rethinking how we measure language models, from composition-aware benchmarks and LLM judges to dynamic, interview-style evaluation.',
    examples: ['BenchHub', 'LLM-as-an-Interviewer', 'JuICE'],
    tags: ['nlp', 'ml']
  },
  {
    title: 'Safety, Fairness & Values',
    description: 'Measuring social bias, harmful content, hate speech, and moral decision-making of LLMs across identities and cultures.',
    examples: ['KoBBQ', 'FINEST', 'Code-Switching Red-Teaming'],
    tags: ['eth', 'nlp']
  },
  {
    title: 'Social Intelligence & Computational Social Science',
    description: 'How do LLMs reason about relationships and social dynamics, and what can language tell us about society, from online trolling to lobbying in legislation?',
    examples: ['Social reasoning in dialogues', 'Troll behavior analysis', 'Lobbying analysis'],
    tags: ['css', 'nlp']
  },
  {
    title: 'AI for Education',
    description: 'LLM tutors and writing support for EFL learners and K-12 classrooms, grounded in datasets of real student and AI interactions.',
    examples: ['RECIPE4U', 'DREsS', 'TutorLens', 'EduZone'],
    tags: ['edu', 'nlp']
  },
  {
    title: 'Interpreting LLMs',
    description: 'Opening up the model: how LLMs reason internally, which training data drives their behavior, and where cultural biases live in their representations.',
    examples: ['Chain-of-thought mechanisms', 'Data attribution', 'Cultural bias in representations'],
    tags: ['int', 'nlp']
  }
]

export default {
  name: 'lab-intro',
  props: {
    tags: Object
  },
  data() {
    return {
      themes: THEMES
    }
  },
  methods: {
    accentOf(theme) {
      const tag = this.tags[theme.tags[0]]
      return tag ? tag.color : 'var(--main-color)'
    }
  }
}
</script>

<style scoped>
.intro {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
}
.lead {
  flex: 1;
  max-width: 54rem;
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.75;
  color: var(--text-color);
}
.intro-brand {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-left: auto;
}
/* Same proportions as the navbar logo: the image is as tall as the two text lines */
.intro-logo {
  display: block;
  width: 5.25rem;
  height: 5.25rem;
}
.intro-brand-text {
  padding: 0 0.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.2em;
  color: var(--text-color);
}
.themes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}
.theme {
  display: flex;
  flex-direction: column;
  padding: 1.1rem 1.2rem;
  background-color: var(--white-color);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-top: 4px solid var(--main-color);
  border-radius: 4px;
}
.theme-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  line-height: 1.3;
  color: var(--text-color);
}
.theme-desc {
  margin: 0 0 0.8rem 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--text-color);
}
.theme-examples {
  margin-top: auto;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--grey-color);
}
@media screen and (max-width: 64rem) {
  .themes {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 48rem) {
  .themes {
    grid-template-columns: 1fr;
  }
  .lead {
    font-size: 1rem;
  }
  .intro-brand {
    display: none;
  }
}
</style>
