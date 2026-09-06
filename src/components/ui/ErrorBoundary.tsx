import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Log for diagnostics without leaking details to UI
    console.error("Unhandled UI error:", error);
  }

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground"
        >
          <h1 className="font-display text-3xl font-bold">Something went wrong.</h1>
          <p className="max-w-md text-muted-foreground">
            The page hit an unexpected error. Try reloading — your data is safe.
          </p>
          <div className="flex gap-3">
            <button
              onClick={this.handleRetry}
              className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background"
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
