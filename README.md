# BatteryVue

A simple realtime battery monitor for web browsers using the Battery Status API.

## Features

- Shows current battery percentage
- Color-coded battery level indicator
- Real-time updates when battery changes
- Charging status with icons
- Responsive battery liquid animation

## Installation

```bash
git clone https://github.com/username/batteryvue.git
cd batteryvue
```

Open `index.html` in your browser.

## Usage

Your HTML needs these elements:

```html
<div class="battery__liquid"></div>
<div class="battery__percentage">0%</div>
<div class="battery__status">Loading...</div>
```

Include the JavaScript:

```html
<script src="battery.js"></script>
```

## How it works

- **Red (0-20%)**: Low battery warning
- **Orange (21-40%)**: Medium-low battery
- **Yellow (41-80%)**: Medium battery  
- **Green (81-100%)**: High battery

Shows charging status with animated icons when plugged in.

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 38+     | ✅      |
| Firefox | 43+     | ✅      |
| Edge    | 79+     | ✅      |
| Safari  | All     | ✅      |

## Dependencies

- [RemixIcon](https://remixicon.com/) for status icons

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -am 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request
