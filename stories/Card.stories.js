import Card from '@/components/CardComponent.vue';

export default {
  title: 'Card',
  component: Card,
}

export const Primary = () => ({
  components: { Card },
  template: '<Card primary label="Button" />',
});