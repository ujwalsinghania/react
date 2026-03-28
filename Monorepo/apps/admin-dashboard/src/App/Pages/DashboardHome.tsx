// hooks
import { useCreateListing } from '../Hooks/useCreateListing';

// components
import { TextInput, Checkbox } from '@local/common/components';

interface DashboardHomeProps {
  onLogout: () => void;
}

const DashboardHome = ({ onLogout }: DashboardHomeProps) => {
  const { formData, setFormData, handlePublish } = useCreateListing();

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 min-h-screen text-white p-6 space-y-8 hidden md:block">
        <h2 className="text-xl font-bold text-blue-400">Owner Dashboard</h2>
        <nav className="space-y-4">
          <div className="bg-slate-800 p-3 rounded-lg text-white font-medium">
            New Listing
          </div>
          <div className="p-3 text-slate-400 hover:text-white cursor-pointer">
            Active Listings
          </div>
          <div className="p-3 text-slate-400 hover:text-white cursor-pointer">
            Analytics
          </div>
        </nav>
        <button
          onClick={onLogout}
          className="text-red-400 text-sm hover:underline"
        >
          Log Out
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 md:p-12">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-slate-800">
                Create New Listing
              </h1>
              <p className="text-slate-500">
                Fill in the details to list your property
              </p>
            </div>
            <button onClick={onLogout} className="md:hidden text-red-500">
              Logout
            </button>
          </div>

          <div className="space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Property Name"
                placeholder="e.g. Sunset Villa"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextInput
                label="City/Location"
                placeholder="e.g. Santorini, Greece"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Price per Night ($)"
                type="number"
                placeholder="200"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
              <div className="flex items-end pb-2">
                <Checkbox
                  label="Available immediately"
                  checked={formData.available}
                  onChange={(e) =>
                    setFormData({ ...formData, available: e.target.checked })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]"
                placeholder="Describe your property..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="pt-4 flex justify-end gap-4">
              <button className="px-6 py-2.5 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                Save Draft
              </button>
              <button
                onClick={handlePublish}
                className="px-10 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
              >
                Publish Listing
              </button>
            </div>
          </div>

          {/* Preview Placeholder */}
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center text-slate-300">
            Preview will update in real-time as you type.
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
