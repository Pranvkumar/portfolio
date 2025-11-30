"""
GPU Training Demonstration for AI/ML Models
Showcases GPU utilization for model training with performance metrics

Author: Pranvkumar
Date: November 30, 2025
"""

import numpy as np
import time
import sys

# Check for GPU availability
try:
    import torch
    GPU_AVAILABLE = torch.cuda.is_available()
    if GPU_AVAILABLE:
        GPU_NAME = torch.cuda.get_device_name(0)
        GPU_MEMORY = torch.cuda.get_device_properties(0).total_memory / 1e9
    else:
        GPU_NAME = "No GPU detected"
        GPU_MEMORY = 0
except ImportError:
    print("PyTorch not installed. Install with: pip install torch torchvision")
    GPU_AVAILABLE = False
    GPU_NAME = "PyTorch not available"
    GPU_MEMORY = 0


class GPUModelTrainer:
    """Demonstrates GPU-accelerated model training"""
    
    def __init__(self):
        self.device = 'cuda' if GPU_AVAILABLE else 'cpu'
        print(f"Initializing trainer on: {self.device.upper()}")
        if GPU_AVAILABLE:
            print(f"GPU: {GPU_NAME}")
            print(f"GPU Memory: {GPU_MEMORY:.2f} GB")
        
    def create_sample_cnn_model(self):
        """Create a sample CNN model for demonstration"""
        if not GPU_AVAILABLE:
            print("GPU not available. Using CPU fallback.")
            return None
            
        import torch.nn as nn
        
        class SimpleCNN(nn.Module):
            def __init__(self):
                super(SimpleCNN, self).__init__()
                self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
                self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
                self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
                self.pool = nn.MaxPool2d(2, 2)
                self.fc1 = nn.Linear(128 * 4 * 4, 512)
                self.fc2 = nn.Linear(512, 10)
                self.relu = nn.ReLU()
                self.dropout = nn.Dropout(0.5)
                
            def forward(self, x):
                x = self.pool(self.relu(self.conv1(x)))
                x = self.pool(self.relu(self.conv2(x)))
                x = self.pool(self.relu(self.conv3(x)))
                x = x.view(-1, 128 * 4 * 4)
                x = self.dropout(self.relu(self.fc1(x)))
                x = self.fc2(x)
                return x
        
        model = SimpleCNN().to(self.device)
        print(f"\nModel created and moved to {self.device.upper()}")
        print(f"Total parameters: {sum(p.numel() for p in model.parameters()):,}")
        return model
    
    def generate_sample_data(self, batch_size=32, num_batches=100):
        """Generate sample training data"""
        if not GPU_AVAILABLE:
            return None, None
            
        print(f"\nGenerating sample data...")
        print(f"Batch size: {batch_size}")
        print(f"Number of batches: {num_batches}")
        print(f"Total samples: {batch_size * num_batches}")
        
        # Generate random image data (32x32 RGB images)
        X = torch.randn(batch_size * num_batches, 3, 32, 32)
        y = torch.randint(0, 10, (batch_size * num_batches,))
        
        return X, y
    
    def train_with_gpu(self, model, X, y, epochs=5, batch_size=32):
        """Train model using GPU acceleration"""
        if not GPU_AVAILABLE or model is None:
            print("Cannot train without GPU or model")
            return
        
        import torch.nn as nn
        import torch.optim as optim
        
        criterion = nn.CrossEntropyLoss()
        optimizer = optim.Adam(model.parameters(), lr=0.001)
        
        dataset = torch.utils.data.TensorDataset(X, y)
        dataloader = torch.utils.data.DataLoader(
            dataset, 
            batch_size=batch_size, 
            shuffle=True
        )
        
        print(f"\n{'='*60}")
        print(f"Starting GPU Training")
        print(f"{'='*60}")
        print(f"Device: {self.device.upper()}")
        print(f"Epochs: {epochs}")
        print(f"Batch size: {batch_size}")
        print(f"{'='*60}\n")
        
        training_stats = []
        
        for epoch in range(epochs):
            epoch_start = time.time()
            model.train()
            running_loss = 0.0
            correct = 0
            total = 0
            
            for i, (inputs, labels) in enumerate(dataloader):
                inputs, labels = inputs.to(self.device), labels.to(self.device)
                
                optimizer.zero_grad()
                outputs = model(inputs)
                loss = criterion(outputs, labels)
                loss.backward()
                optimizer.step()
                
                running_loss += loss.item()
                _, predicted = outputs.max(1)
                total += labels.size(0)
                correct += predicted.eq(labels).sum().item()
                
                if (i + 1) % 20 == 0:
                    print(f"Epoch [{epoch+1}/{epochs}] "
                          f"Batch [{i+1}/{len(dataloader)}] "
                          f"Loss: {running_loss/(i+1):.4f} "
                          f"Acc: {100.*correct/total:.2f}%")
            
            epoch_time = time.time() - epoch_start
            epoch_loss = running_loss / len(dataloader)
            epoch_acc = 100. * correct / total
            
            stats = {
                'epoch': epoch + 1,
                'loss': epoch_loss,
                'accuracy': epoch_acc,
                'time': epoch_time
            }
            training_stats.append(stats)
            
            print(f"\n{'='*60}")
            print(f"Epoch {epoch+1} Complete!")
            print(f"Loss: {epoch_loss:.4f} | Accuracy: {epoch_acc:.2f}%")
            print(f"Time: {epoch_time:.2f}s | Samples/sec: {len(X)/epoch_time:.0f}")
            
            if GPU_AVAILABLE:
                memory_allocated = torch.cuda.memory_allocated(0) / 1e9
                memory_reserved = torch.cuda.memory_reserved(0) / 1e9
                print(f"GPU Memory: {memory_allocated:.2f}GB allocated, "
                      f"{memory_reserved:.2f}GB reserved")
            print(f"{'='*60}\n")
        
        return training_stats
    
    def print_gpu_info(self):
        """Print detailed GPU information"""
        print(f"\n{'='*60}")
        print("GPU Information")
        print(f"{'='*60}")
        
        if not GPU_AVAILABLE:
            print("❌ No GPU detected")
            print("Using CPU for computations")
        else:
            print(f"✓ GPU Available: {GPU_NAME}")
            print(f"✓ CUDA Version: {torch.version.cuda}")
            print(f"✓ PyTorch Version: {torch.__version__}")
            print(f"✓ Total Memory: {GPU_MEMORY:.2f} GB")
            
            if torch.cuda.is_available():
                print(f"✓ Current Device: {torch.cuda.current_device()}")
                print(f"✓ Device Count: {torch.cuda.device_count()}")
                
                memory_allocated = torch.cuda.memory_allocated(0) / 1e9
                memory_reserved = torch.cuda.memory_reserved(0) / 1e9
                print(f"✓ Memory Allocated: {memory_allocated:.2f} GB")
                print(f"✓ Memory Reserved: {memory_reserved:.2f} GB")
        
        print(f"{'='*60}\n")
    
    def compare_cpu_vs_gpu(self):
        """Compare training speed between CPU and GPU"""
        if not GPU_AVAILABLE:
            print("GPU not available for comparison")
            return
        
        import torch.nn as nn
        
        print(f"\n{'='*60}")
        print("CPU vs GPU Performance Comparison")
        print(f"{'='*60}\n")
        
        # Simple matrix multiplication test
        size = 5000
        iterations = 10
        
        # CPU test
        print("Testing CPU performance...")
        cpu_times = []
        for i in range(iterations):
            a = torch.randn(size, size)
            b = torch.randn(size, size)
            start = time.time()
            c = torch.matmul(a, b)
            cpu_times.append(time.time() - start)
        
        avg_cpu_time = np.mean(cpu_times)
        print(f"CPU Average Time: {avg_cpu_time:.4f}s")
        
        # GPU test
        print("\nTesting GPU performance...")
        gpu_times = []
        for i in range(iterations):
            a = torch.randn(size, size).cuda()
            b = torch.randn(size, size).cuda()
            torch.cuda.synchronize()
            start = time.time()
            c = torch.matmul(a, b)
            torch.cuda.synchronize()
            gpu_times.append(time.time() - start)
        
        avg_gpu_time = np.mean(gpu_times)
        print(f"GPU Average Time: {avg_gpu_time:.4f}s")
        
        speedup = avg_cpu_time / avg_gpu_time
        print(f"\n{'='*60}")
        print(f"🚀 GPU Speedup: {speedup:.2f}x faster than CPU!")
        print(f"{'='*60}\n")


def main():
    """Main demonstration function"""
    print(f"\n{'='*60}")
    print("GPU Training Demonstration")
    print("Pranvkumar's AI/ML Portfolio")
    print(f"{'='*60}\n")
    
    trainer = GPUModelTrainer()
    trainer.print_gpu_info()
    
    if not GPU_AVAILABLE:
        print("\n⚠️  GPU not available. Install CUDA and PyTorch with GPU support:")
        print("   pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118")
        print("\nExiting demonstration.")
        return
    
    # Create model
    model = trainer.create_sample_cnn_model()
    
    # Generate data
    X, y = trainer.generate_sample_data(batch_size=64, num_batches=50)
    
    # Train with GPU
    stats = trainer.train_with_gpu(model, X, y, epochs=3, batch_size=64)
    
    # Compare CPU vs GPU
    trainer.compare_cpu_vs_gpu()
    
    print(f"\n{'='*60}")
    print("Training Complete!")
    print("Demonstration showcases:")
    print("  ✓ GPU detection and utilization")
    print("  ✓ CNN model training on GPU")
    print("  ✓ Performance metrics tracking")
    print("  ✓ CPU vs GPU speed comparison")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
