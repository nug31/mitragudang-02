import React, { useState, useEffect } from "react";
import { Item, User } from "../../types";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { X, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { itemService } from "../../services/itemService";

interface StockAdjustmentModalProps {
    type: "masuk" | "keluar";
    user: User;
    onClose: () => void;
    onSuccess: () => void;
}

const StockAdjustmentModal: React.FC<StockAdjustmentModalProps> = ({
    type,
    user,
    onClose,
    onSuccess,
}) => {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const [notes, setNotes] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [fetchingItems, setFetchingItems] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const allItems = await itemService.getAllItems();
                setItems(allItems);
                if (allItems.length > 0) {
                    setSelectedItemId(allItems[0].id);
                }
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setFetchingItems(false);
            }
        };

        fetchItems();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedItemId) return;

        setLoading(true);
        try {
            const selectedItem = items.find((i) => i.id === selectedItemId);
            if (!selectedItem) throw new Error("Item not found");

            const adjustment = type === "masuk" ? quantity : -quantity;
            const newQuantity = Math.max(0, selectedItem.quantity + adjustment);

            await itemService.updateItem(selectedItemId, {
                quantity: newQuantity,
                historyNotes: notes || (type === "masuk" ? "Barang Masuk (Manual)" : "Barang Keluar (Manual)"),
                userId: user.id,
            });

            onSuccess();
            onClose();
        } catch (error) {
            console.error("Error adjusting stock:", error);
            alert("Failed to adjust stock. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const itemOptions = items.map((item) => ({
        value: item.id,
        label: `${item.name} (Current: ${item.quantity} ${item.unit || 'pcs'})`,
    }));

    const isMasuk = type === "masuk";

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100">
                <div className={`p-6 flex justify-between items-center ${isMasuk ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="flex items-center">
                        {isMasuk ? (
                            <ArrowUpCircle className="h-6 w-6 text-green-600 mr-2" />
                        ) : (
                            <ArrowDownCircle className="h-6 w-6 text-red-600 mr-2" />
                        )}
                        <h2 className="text-xl font-bold text-gray-900">
                            {isMasuk ? "Input Barang Masuk" : "Input Barang Keluar"}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <Select
                        label="Pilih Barang"
                        value={selectedItemId}
                        onChange={(e) => setSelectedItemId(e.target.value)}
                        options={itemOptions}
                        required
                        disabled={fetchingItems || loading}
                    />

                    <Input
                        label="Jumlah"
                        type="number"
                        min="1"
                        value={quantity.toString()}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                        required
                        disabled={loading}
                    />

                    <Textarea
                        label="Catatan (Opsional)"
                        placeholder={isMasuk ? "Contoh: Restock dari supplier A" : "Contoh: Penggunaan internal"}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        disabled={loading}
                    />

                    <div className="mt-8 flex space-x-3">
                        <Button
                            variant="outline"
                            onClick={onClose}
                            type="button"
                            className="flex-1"
                            disabled={loading}
                        >
                            Batal
                        </Button>
                        <Button
                            variant={isMasuk ? "success" : "danger"}
                            type="submit"
                            className="flex-1"
                            isLoading={loading}
                            disabled={fetchingItems || !selectedItemId}
                        >
                            Simpan
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StockAdjustmentModal;
