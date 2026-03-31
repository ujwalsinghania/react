const fs = require('fs');

const fixes = {
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/admin/src/features/products/screens/ProductCreate.tsx':
    'export const ProductCreate = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/admin/src/features/products/screens/ProductList.tsx':
    'export const ProductList = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/admin/src/features/products/components/ProductForm.tsx':
    'export const ProductForm = ({ onSubmit, isLoading }: Props) => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/admin/src/features/products/components/ProductTable.tsx':
    'export const ProductTable = ({ products, onDelete, isLoading }: Props) => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/admin/src/features/products/components/ProductStatusBadge.tsx':
    'export const ProductStatusBadge = ({ status }: Props) => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/host/src/pages/LandingPage.tsx':
    'export const LandingPage = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/insights/src/features/productMetrics/screens/ProductMetricsDashboard.tsx':
    'export const ProductMetricsDashboard = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/insights/src/features/productMetrics/components/CartMetricsCards.tsx':
    'export const CartMetricsCards = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/insights/src/features/productMetrics/components/TopProductsList.tsx':
    'export const TopProductsList = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/insights/src/features/productMetrics/components/MetricCard.tsx':
    'export const MetricCard = ({ label, value, change, trending, headline, description }: Props) => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/insights/src/features/productMetrics/components/TopProductsCards.tsx':
    'export const TopProductsCards = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/host/src/features/auth/components/RequireAuth.tsx':
    'export const RequireAuth = ({ children }: { children: ReactNode }) => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/host/src/components/AppHeader.tsx':
    'export const AppHeader = ({ brand, nav, actions }: Props) => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/host/src/features/auth/screens/LoginScreen.tsx':
    'export const LoginScreen = () => {',
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/host/src/components/NavCard.tsx':
    'export const NavCard = ({ title, description, href, label }: NavCardProps) => {',
};

const defaultFixes = {
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/admin/src/AdminShell.tsx':
    {
      target: 'const  = () => {\\nexport default ;\\n',
      replaceName: 'AdminShell',
    },
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/insights/src/InsightsShell.tsx':
    {
      target: 'const  = () => {\\nexport default ;\\n',
      replaceName: 'InsightsShell',
    },
  '/Users/ujwal/Documents/react/Module-Federation/ecommerce/apps/host/src/App.tsx':
    {
      target: 'const  = () => {\\nexport default ;\\n',
      replaceName: 'App',
    },
};

for (const [file, correctLines] of Object.entries(fixes)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('export const  = () => {')) {
      content = content.replace('export const  = () => {', correctLines);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed ' + file);
    }
  }
}

for (const [file, data] of Object.entries(defaultFixes)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // The previous failed replacement placed `const  = () => {\nexport default ;\n`
    // Let's replace the broken structure.
    content = content.replace(
      /const\s+=\s+\(\)\s*=>\s*\{/,
      `const ${data.replaceName} = () => {`
    );
    content = content.replace(/export\s+default\s+;\s*/, '');
    content = content + `\nexport default ${data.replaceName};\n`;
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed ' + file);
  }
}
