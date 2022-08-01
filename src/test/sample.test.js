import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { act, create } from "react-test-renderer";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import { Header } from "../components";
import { Home, ShareVideo } from "../containers";
import { AuthContext } from "../context/authContext";

describe("App", () => {
  it("renders correctly", async () => {
    vi.spyOn(axios, "get").mockResolvedValue({ data: { videos: [] } });
    let component;
    await act(async () => {
      component = create(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Header", () => {
  describe("Given view for guest", () => {
    it("should render sign in button", () => {
      let renderer = create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("Given view for signed in user", () => {
    it("should render Logout button", () => {
      let renderer = create(
        <AuthContext.Provider
          value={{
            authUser: { email: "test@gmail.com" },
            signOut: () => {},
            signIn: async (email, password) => {},
          }}
        >
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </AuthContext.Provider>
      );
      let snapshot = renderer.toJSON();
      let loggedInSnapshot = snapshot.children.find((c) => c.type === "div");
      let shareVideoButton = loggedInSnapshot.children.find(
        (c) => c.type === "button"
      );

      expect(shareVideoButton.children[0]).toEqual("Share a video");
      expect(loggedInSnapshot.props.className).toEqual("logged-in-state");
      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});

describe("Share Video", () => {
  it("should render correctly", () => {
    let renderer = create(
      <MemoryRouter>
        <ShareVideo />
      </MemoryRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});

describe("Home", () => {
  it("should render correctly", async () => {
    vi.spyOn(axios, "get").mockResolvedValue({
      data: { videos: [{ _id: "1", url: "url", title: "youtube" }] },
    });
    let component;
    await act(async () => {
      component = create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
