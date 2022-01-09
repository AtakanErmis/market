import reducer, {
  clearBasket,
  addItem,
  removeItem,
  setItemCount,
} from "@stores/basketReducer";
import { AnyAction } from "redux";

const stateWithAnItem = {
  items: [
    {
      product: {
        tags: ["tag1", "tag2"],
        price: 10.99,
        name: "name",
        description: "description",
        slug: "slug",
        added: 23424321,
        manufacturer: "manufacturer",
        itemType: "itemType",
      },
      quantity: 1,
      totalPrice: 10.99,
    },
  ],
  totalPrice: 10.99,
};

describe("basketReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

  it("should handle clearBasket", () => {
    expect(reducer(stateWithAnItem, clearBasket())).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

  it("should handle addItem", () => {
    expect(
      reducer(
        {
          items: [],
          totalPrice: 0,
        },
        addItem(stateWithAnItem.items[0].product)
      )
    ).toEqual(stateWithAnItem);
  });

  it("should handle addItem with a product already in basket", () => {
    expect(
      reducer(stateWithAnItem, addItem(stateWithAnItem.items[0].product))
    ).toEqual({
      items: [
        {
          product: {
            tags: ["tag1", "tag2"],
            price: 10.99,
            name: "name",
            description: "description",
            slug: "slug",
            added: 23424321,
            manufacturer: "manufacturer",
            itemType: "itemType",
          },
          quantity: 2,
          totalPrice: 21.98,
        },
      ],
      totalPrice: 21.98,
    });
  });

  it("should handle removeItem", () => {
    expect(
      reducer(
        stateWithAnItem,
        removeItem(stateWithAnItem.items[0].product.slug)
      )
    ).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

  it("should handle setItemCount with count of non-zero number", () => {
    expect(
      reducer(
        stateWithAnItem,
        setItemCount({
          slug: stateWithAnItem.items[0].product.slug,
          count: 2,
        })
      )
    ).toEqual({
      items: [
        {
          product: {
            tags: ["tag1", "tag2"],
            price: 10.99,
            name: "name",
            description: "description",
            slug: "slug",
            added: 23424321,
            manufacturer: "manufacturer",
            itemType: "itemType",
          },
          quantity: 2,
          totalPrice: 21.98,
        },
      ],
      totalPrice: 21.98,
    });
  });

  it("should remove item when setItemCount called with count of 0", () => {
    expect(
      reducer(
        stateWithAnItem,
        setItemCount({
          slug: stateWithAnItem.items[0].product.slug,
          count: 0,
        })
      )
    ).toEqual({
      items: [],
      totalPrice: 0,
    });
  });
});
