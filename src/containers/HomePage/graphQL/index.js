import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  {
    category(id: 2) {
      children_count
      children {
        id
        image
        level
        name
        path
        products {
          items {
            id
            name
            sku
            image {
              label
              url
            }
            media_gallery {
              label
              url
            }
          }
          total_count
          page_info {
            current_page
            page_size
          }
        }
        children {
          id
          image
          level
          name
          path
          products {
            total_count
            page_info {
              current_page
              page_size
            }
          }
          children {
            id
            image
            level
            name
            path
            products {
              total_count
              page_info {
                current_page
                page_size
              }
            }
            children {
              id
              level
              name
              path
            }
          }
        }
      }
    }
  }
`;

export const GET_FEATURED_PRODUCTS = gql`
  {
    featuredProducts {
      items {
        name
        media {
          media_item
        }
        price
        special_price
      }
    }
  }
`;

export const GET_DAILY_DEALS = gql`
  {
    dailyDeals {
      items {
        name
        media {
          media_item
        }
        new_price
        discount_type
        discount_value
        old_price
      }
    }
  }
`;

export const GET_STORES = gql`
  {
    stores {
      items {
        name
        id
        description
        banner
        rating
        company_locality
        media {
          media_item
        }
      }
    }
  }
`;

export const GET_POPULAR_CATEGORIES = gql`
  {
    popularCategories {
      items {
        name
        description
        id
        image
      }
    }
  }
`;
