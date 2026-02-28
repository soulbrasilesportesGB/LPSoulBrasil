'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { blogPosts, blogCategories, formatDate, type BlogPost } from '@/lib/blog';
import { Plus, Search, CreditCard as Edit, Trash2, Eye, EyeOff, Calendar, User, Clock, MoveHorizontal as MoreHorizontal } from 'lucide-react';

<Button
  variant="outline"
  onClick={async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  }}
>
  Sair
</Button>

export default function AdminBlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // In a real app, this would be connected to your backend
  const [posts, setPosts] = useState(blogPosts);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      blogCategories.find(cat => cat.slug === selectedCategory)?.name === post.category;
    
    const matchesStatus = selectedStatus === 'all' ||
      (selectedStatus === 'published' && post.published) ||
      (selectedStatus === 'draft' && !post.published);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const togglePublishStatus = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, published: !post.published } : post
    ));
  };

  const deletePost = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bebas font-bold">
                Gerenciar Blog
              </h1>
              <p className="text-white/90 mt-2">
                Crie, edite e gerencie os posts do blog da Soul Brasil Esportes
              </p>
            </div>
            <Button asChild size="lg" className="bg-soul-yellow hover:bg-soul-orange text-soul-dark">
              <Link href="/admin/blog/novo">
                <Plus className="mr-2 h-4 w-4" />
                Novo Post
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionContainer>
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total de Posts</p>
                  <p className="text-2xl font-bold text-soul-dark">{posts.length}</p>
                </div>
                <div className="p-3 bg-soul-teal/10 rounded-lg">
                  <Edit className="h-6 w-6 text-soul-teal" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Publicados</p>
                  <p className="text-2xl font-bold text-soul-dark">
                    {posts.filter(p => p.published).length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rascunhos</p>
                  <p className="text-2xl font-bold text-soul-dark">
                    {posts.filter(p => !p.published).length}
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <EyeOff className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Categorias</p>
                  <p className="text-2xl font-bold text-soul-dark">{blogCategories.length}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MoreHorizontal className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-soul-teal focus:border-transparent"
              >
                <option value="all">Todas as categorias</option>
                {blogCategories.map(category => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-soul-teal focus:border-transparent"
              >
                <option value="all">Todos os status</option>
                <option value="published">Publicados</option>
                <option value="draft">Rascunhos</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Posts ({filteredPosts.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">Post</th>
                    <th className="text-left p-4 font-medium text-gray-900">Autor</th>
                    <th className="text-left p-4 font-medium text-gray-900">Categoria</th>
                    <th className="text-left p-4 font-medium text-gray-900">Status</th>
                    <th className="text-left p-4 font-medium text-gray-900">Data</th>
                    <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post, index) => (
                    <motion.tr
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4">
                        <div className="flex items-start gap-3">
                          {post.featuredImage && (
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-16 h-12 object-cover rounded"
                            />
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900 line-clamp-1">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500">
                                {post.readingTime} min
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {post.author.avatar && (
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          )}
                          <span className="text-sm text-gray-900">
                            {post.author.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge 
                          className="text-white text-xs"
                          style={{ 
                            backgroundColor: blogCategories.find(cat => cat.name === post.category)?.color || '#009c99' 
                          }}
                        >
                          {post.category}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge variant={post.published ? 'default' : 'secondary'}>
                          {post.published ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">
                          {formatDate(post.publishedAt)}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            asChild
                          >
                            <Link href={`/admin/blog/editar/${post.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => togglePublishStatus(post.id)}
                          >
                            {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Excluir Post</DialogTitle>
                                <DialogDescription>
                                  Tem certeza que deseja excluir "{post.title}"? Esta ação não pode ser desfeita.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="flex justify-end gap-2 mt-4">
                                <Button variant="outline">Cancelar</Button>
                                <Button 
                                  variant="destructive"
                                  onClick={() => deletePost(post.id)}
                                >
                                  Excluir
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum post encontrado.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </SectionContainer>
    </>
  );
}