export const getUserFingerPrint = async () => {
  const TIMEOUT_DURATION = 5000; // Timeout duration in milliseconds (adjust as needed)

  try {
    const timeout = (ms: number) =>
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms),
      );
    const timeoutPromise = timeout(TIMEOUT_DURATION);
    const controller = new AbortController();
    const signal = controller.signal;
    // Fetch IPv6 address
    let ipAddressResponse = null;
    let ipAddressData = null;
    let ipAddress = null;
    try {
      ipAddressResponse = (await Promise.race([
        fetch("https://api64.ipify.org?format=json", { signal }),
        timeoutPromise,
      ])) as Response;
      if (ipAddressResponse.ok) {
        ipAddressData = await ipAddressResponse.json();
        ipAddress = ipAddressData.ip || null;
      }
    } catch {
      // Handle error silently
    }

    // Fetch IPv4 address
    let ipAddressV4 = null;
    try {
      const ipAddressResponseV4 = (await Promise.race([
        fetch("https://api.ipify.org?format=json", { signal }),
        timeoutPromise,
      ])) as Response;
      if (ipAddressResponseV4.ok) {
        const ipAddressDataV4 = await ipAddressResponseV4.json();
        ipAddressV4 = ipAddressDataV4.ip || null;
      }
    } catch {
      // Handle error silently
    }

    // Fetch IPv6 address using a different service
    let ipAddressV6 = null;
    try {
      const ipAddressResponseV6 = (await Promise.race([
        fetch("https://api6.ipify.org?format=json", { signal }),
        timeoutPromise,
      ])) as Response;

      if (ipAddressResponseV6.ok) {
        const ipAddressDataV6 = await ipAddressResponseV6.json();
        ipAddressV6 = ipAddressDataV6.ip || null;
      }
    } catch {
      // Handle error silently
    }

    // Fetch other properties...
    const macAddress: string | null = null;
    let webBrowser: string | null = null;
    try {
      webBrowser = navigator.userAgent || null;
    } catch {
      // Handle error silently
    }

    let deviceInfo: string | null = null;
    try {
      deviceInfo = navigator.platform || null;
    } catch {
      // Handle error silently
    }

    let deviceScreenSize: string | null = null;
    try {
      deviceScreenSize = window.screen
        ? `${window.screen.width}x${window.screen.height}`
        : null;
    } catch {
      // Handle error silently
    }

    let language: string | null = null;
    try {
      language = window.navigator.language || null;
    } catch {
      // Handle error silently
    }

    let timezone: string | null = null;
    try {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
    } catch {
      // Handle error silently
    }

    let colorDepth: number | null = null;
    try {
      colorDepth = window.screen.colorDepth || null;
    } catch {
      // Handle error silently
    }

    let plugins: string[] | null = null;
    try {
      plugins = window.navigator.plugins
        ? Array.from(window.navigator.plugins)
            .map((plugin) => plugin.name)
            .sort()
        : null;
    } catch {
      // Handle error silently
    }

    let thirdPartyCookiesEnabled: boolean | null = null;
    try {
      thirdPartyCookiesEnabled = navigator.cookieEnabled || null;
    } catch {
      // Handle error silently
    }

    let connectionSpeed: string | null = null;
    try {
      const navWithConnection = navigator as Navigator & {
        connection?: { effectiveType: string };
      };
      connectionSpeed = navWithConnection.connection?.effectiveType || null;
    } catch {
      // Handle error silently
    }

    let operatingSystem: string | null = null;
    try {
      operatingSystem = window.navigator.platform || null;
    } catch {
      // Handle error silently
    }

    let isTouchSupported: boolean | null = null;
    try {
      const navWithTouch = navigator as Navigator & {
        msMaxTouchPoints?: number;
      };
      isTouchSupported =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navWithTouch.msMaxTouchPoints || 0) > 0 ||
        null;
    } catch {
      // Handle error silently
    }

    let geoLocation: {
      latitude?: number;
      longitude?: number;
      city?: string | null;
      region?: string | null;
      country?: string | null;
    } | null = null;
    try {
      geoLocation = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          () => {
            resolve(null);
          },
        );
      });
    } catch {
      // Handle error silently
    }

    // Handle geolocation error
    if (geoLocation && geoLocation.latitude && geoLocation.longitude) {
      try {
        const response = (await Promise.race([
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${geoLocation.latitude}&lon=${geoLocation.longitude}`,
            { signal },
          ),
          timeoutPromise,
        ])) as Response;

        if (response.ok) {
          const address = await response.json();
          geoLocation.city = address?.address?.city || null;
          geoLocation.region = address?.address?.state || null;
          geoLocation.country = address?.address?.country || null;
        }
      } catch {
        // Handle error silently
      }
    }

    let geoLocationResponse: Response | null = null;
    try {
      geoLocationResponse = (await Promise.race([
        fetch(`https://ipapi.co/${ipAddress}/json/`, { signal }),
        timeoutPromise,
      ])) as Response;
    } catch {
      // Handle error silently
    }

    let geoLocationData: {
      city?: string | null;
      region?: string | null;
      country?: string | null;
      latitude?: number | null;
      longitude?: number | null;
    } | null = null;

    try {
      if (geoLocationResponse) {
        geoLocationData = await geoLocationResponse.json();
      }
    } catch {
      // Handle error silently
    }

    return {
      ipAddress,
      ipAddressV4,
      ipAddressV6,
      macAddress,
      webBrowser,
      deviceInfo,
      deviceScreenSize,
      geoLocation,
      geoLocationByIP: geoLocationData,
      operatingSystem,
      language,
      timezone,
      colorDepth,
      plugins,
      thirdPartyCookiesEnabled,
      connectionSpeed,
      isTouchSupported,
    };
  } catch {
    return {
      ipAddress: null,
      ipAddressV4: null,
      ipAddressV6: null,
      macAddress: null,
      webBrowser: null,
      deviceInfo: null,
      deviceScreenSize: null,
      geoLocation: null,
      geoLocationByIP: null,
      operatingSystem: null,
      language: null,
      timezone: null,
      colorDepth: null,
      plugins: null,
      thirdPartyCookiesEnabled: null,
      connectionSpeed: null,
      isTouchSupported: null,
    };
  }
};
