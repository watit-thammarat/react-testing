export default {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.json',
  type: 'object',
  title: 'The Root Schema',
  required: ['auth', 'comments'],
  properties: {
    auth: {
      $id: '#/properties/auth',
      type: 'boolean',
      title: 'The Auth Schema',
      default: false,
      examples: [true]
    },
    comments: {
      $id: '#/properties/comments',
      type: 'array',
      title: 'The Comments Schema',
      items: {
        $id: '#/properties/comments/items',
        type: 'object',
        title: 'The Items Schema',
        required: ['id', 'body'],
        properties: {
          id: {
            $id: '#/properties/comments/items/properties/id',
            type: 'integer',
            title: 'The Id Schema',
            default: 0,
            examples: [1]
          },
          body: {
            $id: '#/properties/comments/items/properties/body',
            type: 'string',
            title: 'The Body Schema',
            default: '',
            examples: ['hello world'],
            pattern: '^(.*)$'
          }
        }
      }
    }
  }
};
